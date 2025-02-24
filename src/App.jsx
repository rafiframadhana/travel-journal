import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


function App() {

  const propsDetails = data.map(detail => {
    return <Entry
    
      key={detail.id}
      detail = {detail}  // alternative for these props:  // img={detail.img}
                                                          // title={detail.title}
                                                          // country={detail.country}
                                                          // mapsUrl={detail.googleMapsLink}
                                                          // dates={detail.dates}
                                                          // text={detail.text}
    
    />
  })
  return (
    <>
      <Header />
      <main>
        {propsDetails}
      </main>

    </>
  )
}

export default App
