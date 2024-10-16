import React from 'react'

function Home() {


    const tags = ['Beauty', 'Skincare', 'Makeup', 'Wellness', 'Lifestyle', 'Fashion', 'Health', 'Nutrition'];

    const videos = [
        {
            title: 'Skin Care Product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, assumenda!.',
            url: 'A3ZANxbbw-E', // Video ID
        },
    ];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];


    return (
        <div className='flex justify-between w-full'>
            {/* left container */}
            <div className="left basis-8/12 grow-1 shrink-1 ">
                <div className="imgBox h-3/6 shadow-lg">
                    <img className=' w-full  h-full object-cover' src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                </div>
                <div className='p-2'>
                    <h4 className='text-lg font-bold'>{randomVideo.title}</h4>
                    <h6 className='text-gray-400'>Description: {new Date().toLocaleDateString()}</h6>
                    <p className=' py-3'>{randomVideo.description}</p>

                    <div className="flex justify-between mt-4">
                        <button className="border text-gray-950 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition duration-200">
                            Read More &gt;&gt;
                        </button>
                        <div className="  px-4 py-2 rounded transition duration-200">
                            Comments <span className='px-2  text-white bg-gray-950'>0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right container */}
            <div className="right basis-4/12 grow-1 shrink-1 ">

                <div className="right basis-8/12 grow-1 shrink-1  px-2">
                    <div className="card shadow-md border border-gray-100 p-3">
                        <img src="https://png.pngitem.com/pimgs/s/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png" alt="" />
                        <h4 className='p-1 text-xl '><h4 className='text-lg font-bold'>{randomVideo.title}</h4></h4>
                        <h6 className='text-gray-400 text-sm'>Description: {new Date().toLocaleDateString()}</h6>
                        <p className=' py-3 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid saepe optio voluptatem perspiciatis quae fugit mollitia exercitationem, itaque vero.</p>

                        <div className="flex justify-between mt-4">
                            <button className="border text-gray-950 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition duration-200">
                                Read More &gt;&gt;
                            </button>
                            <div className="  px-4 py-2 rounded transition duration-200">
                                Comments <span className='px-2  text-white bg-gray-950'>0</span>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="posts mt-3 shadow-md p-2  border border-gray-100">
                        <h4 className='text-lg font-bold'>Popular Posts</h4>
                        <div className="postList py-2">
                            <h2 className="postCard   ">Post 1</h2>
                            <p className=''>Lorem ipsum dolor sit amet.</p>
                            <hr />
                        </div>
                        <div className="postList py-2">
                            <h2 className="postCard   ">Post 2</h2>
                            <p className=''>Lorem ipsum dolor sit amet.</p>
                            <hr />
                        </div>
                        <div className="postList py-2">
                            <h2 className="postCard   ">Post 2</h2>
                            <p className=''>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="tags mt-3 shadow-md p-2 border border-gray-100">
                        <h4 className='text-lg font-bold'>Tags</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag, index) => (
                                <button key={index} className="bg-gray-900 text-white px-3  rounded hover:bg-gray-600 transition duration-200">
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home