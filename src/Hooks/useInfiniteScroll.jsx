import { useState, useRef, useCallback, useEffect } from "react";

const useInfiniteScroll = (data, initialItemsCount, itemsPerPage) => {
  const [items, setItems] = useState(data.slice(0, initialItemsCount));

  useEffect(() => {
    setItems(data.slice(0, initialItemsCount));
  }, [data]);

  const observer = useRef(null);

  const lastItemRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  const loadMoreItems = useCallback(() => {
    setItems((prevItems) => {
      const newItems = data.slice(
        prevItems.length,
        prevItems.length + itemsPerPage
      );
      return [...prevItems, ...newItems];
    });
  }, [data, itemsPerPage]);

  return { items, lastItemRef };
};

export default useInfiniteScroll;
