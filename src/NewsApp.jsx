import { useEffect, useState } from 'react'

const NewsApp = () => {
    const [data, setData] = useState([])

    const newsApi = 'https://newsdata.io/api/1/latest?apikey=pub_ad3d3e3ab4a54482b8dc8546b9f2b183&q=pizza'

    const getNews = async () => {
        try {
            const apiData = await fetch(newsApi)
            const res = await apiData.json()
            setData(res.results);
            console.log(res.results)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <>
        <div className="flex justify-center flex-wrap gap-6">
            {
                data.map((item, i) => {
                    return (
    <>
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: "url('https://www.shutterstock.com/shutterstock/videos/3822164211/thumb/1.jpg?ip=x480')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "30px"
            }}
        >

        <div className="flex justify-center flex-wrap gap-6">
            {
                data.map((item, i) => {
                    return (
                        <div key={i}>
                            <div class="max-w-sm rounded-xl overflow-hidden shadow-2xl min-w-[300px] bg-white p-2">
                                <img class="w-full" src={item.image_url} alt="news"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">{item.title}</div>
                                    <p class="text-black text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.pubDate}</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.language}</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.datatype}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        </div>
    </>
)

                })
            }

            </div>
            {/* NewsApp
            C = create - post
            U = update - put
            R = read - get
            D = delete - delete

            req frontend ---- backend --- database

            200 
            401 402 403 404
            501 502 503 504 */}
        </>
    )
}

export default NewsApp