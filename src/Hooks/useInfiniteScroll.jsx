import { useState, useRef, useCallback, useEffect } from "react";

const useInfiniteScroll = (data, initialItemsCount, itemsPerPage) => {
  // State to store the current items to display
  const [items, setItems] = useState(data.slice(0, initialItemsCount));
  // Reference to the intersection observer
  const observer = useRef(null);

  // Update items when data or initialItemsCount changes
  useEffect(() => {
    setItems(data.slice(0, initialItemsCount));
  }, [data, initialItemsCount]);

  // Callback to load more items when the user scrolls to the end
  const loadMoreItems = useCallback(() => {
    setItems((prevItems) => {
      // Calculate the range of new items to add
      const newItems = data.slice(
        prevItems.length,
        prevItems.length + itemsPerPage
      );
      // Concatenate new items with previous items
      return [...prevItems, ...newItems];
    });
  }, [data, itemsPerPage]);

  // Callback to set up the intersection observer for the last item
  const lastItemRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      // Create a new intersection observer
      observer.current = new IntersectionObserver((entries) => {
        // If the last item is intersecting with the viewport, load more items
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      });

      // Observe the last item node
      if (node) observer.current.observe(node);
    },
    [loadMoreItems]
  );

  // Return the current items and the last item reference
  return { items, lastItemRef };
};

export default useInfiniteScroll;
