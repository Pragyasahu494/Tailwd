import { useEffect, useState } from "react";

const NewsApp = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(true); 

  const newsApi =
    "https://newsdata.io/api/1/latest?apikey=pub_ad3d3e3ab4a54482b8dc8546b9f2b183&q=pizza";

  const getNews = async () => {
    try {
      const apiData = await fetch(newsApi);
      const res = await apiData.json();
      setData(res.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
    {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
    
    <div className="bg-white w-[500px] rounded-xl shadow-2xl p-8 text-center relative">
      
      <h2 className="text-2xl font-bold mb-4">EXPRESS</h2>

      <p className="text-gray-700 mb-6 text-lg">
        Daily Express uses notifications to keep you updated
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full mb-4"
      >
        Keep me updated
      </button>

      <div>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-red-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full mb-4"
        >
          No thanks
        </button>
      </div>

    </div>
  </div>
)}
     <div className="min-h-screen bg-blue-100">
    <header className="bg-blue-900 text-white p-4">
        <div className="max-w-7xl mx-auto py-2 text-center">
    <h1 className="text-5xl font-bold">Daily News </h1>
      {/* <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center">Daily News</h1> */}
      </div>
    </header>

 <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-8 px-4">

        {/* LEFT SIDE*/}
        <main className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-4 overflow-hidden hover:bg-lime-200 shadow-2xl min-w-75">
              <img
                src={item.image_url}
                alt="news"
                className="w-full h-48 object-cover rounded"
              />

              <h3 className="text-lg font-bold mt-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.description?.slice(0, 150)}...
              </p>
              {/* <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {item.description}
              </p> */}
            <div className="px-6 pt-4 pb-2"> 
                <span className="inline-block bg-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Published on - {item.pubDate}</span> 
                <span className="capitalize inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Language - {item.language}</span> 
                <span className="capitalize inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Creator-{item.creator}</span> 
                <span className="capitalize inline-block text-l font-bold text-blue-900 mr-2 mb-2 bg-red-200 rounded-full px-3 py-1">Country - {item.country}</span> 
                <span className="capitalize inline-block text-l font-bold text-emerald-800 mr-2 mb-2 bg-zinc-300 rounded-full px-3 py-1">Category - {item.category}</span> </div>
              <a href={item.link}
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-800 text-white hover:text-xl font-bold py-2 px-4 rounded mt-3">              
                Read More →
              </a>
            </div>
          ))}
        </main>
          
        {/* <aside className="md:w-1/4 space-y-4"> */}
        <aside className="md:w-1/4 border-l-4 border-gray-800 pl-6 space-y-6">
        
          <h2 className="text-xl font-semibold mb-4 rounded-2xl bg-blue-600 text-white p-2 text-center">
            Latest News
          </h2>

          {data.slice(0, 6).map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 p-2 rounded shadow-sm  overflow-hidden hover:bg-lime-200 shadow-2xl min-w-75" >
              
              <img src={item.image_url}
                alt="news"
                className="w-16 h-16 object-cover rounded"
              />
            <a href={item.link} target="_blank"
            className="text-sm font-semibold hover:text-blue-600 hover:underline"
            >
            {item.title}
            </a>
              {/* <p className="text-sm font-medium">
                {item.title}
              </p> */}
            </div>
          ))}
        </aside>
        </div>
      </div>
    </>

  );
};

export default NewsApp;