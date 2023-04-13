import './App.css'

function App() {

  return (
     const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    AOS.init();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <HashRouter>
        {width < 769 ? <NavigationMobile /> : <Navigation />}
        <hr id="top" />
        <Routes>
          <Route path="/" element={<Home />} />
          {width < 768 ? (
            <Route path="/about" element={<AboutPhone />} />
          ) : (
            <Route path="/about" element={<About />} />
          )}
          
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sophrology" element={<Sophrology />} />
          <Route path="/massages" element={<Massages />} />
          <Route path="*" element={<Default404 />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
  )
}

export default App
