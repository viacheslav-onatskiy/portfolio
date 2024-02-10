const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: 'orange' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
