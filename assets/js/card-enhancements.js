document.addEventListener('DOMContentLoaded', function() {
  // Create root element for all card containers
  const cardContainers = document.querySelectorAll('.row');

  cardContainers.forEach(container => {
      const CardEnhanced = ({ element }) => {
          const [isVisible, setIsVisible] = React.useState(false);

          React.useEffect(() => {
              // Create intersection observer for fade-in effect
              const observer = new IntersectionObserver(
                  ([entry]) => {
                      if (entry.isIntersecting) {
                          setIsVisible(true);
                          observer.disconnect();
                      }
                  },
                  { threshold: 0.1 }
              );

              observer.observe(element);
              return () => observer.disconnect();
          }, []);

          return React.createElement(React.Fragment, null, 
              React.createElement('div', {
                  className: `card custom-card ${isVisible ? 'visible' : ''}`,
                  style: {
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.5s ease-out'
                  }
              }, element.innerHTML)
          );
      };

      // Get all cards in this container
      const cards = container.querySelectorAll('.card');
      
      cards.forEach((card, index) => {
          const cardRoot = ReactDOM.createRoot(card.parentElement);
          cardRoot.render(React.createElement(CardEnhanced, {
              element: card,
              key: index
          }));
      });
  });
});