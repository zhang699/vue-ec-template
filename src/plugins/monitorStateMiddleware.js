

export default function monitorStateMiddleware() {
  return store => {
    console.warn('before store');
    store.subscribe((mutation, state) => {
      console.warn('afterStore', mutation);
    });
  };
};
