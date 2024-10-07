import React from 'react'

function Card({ products }) {
    return (
        <>
            {products.map((product) => (
                <div className='p-1  mt-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded'>
                    <div key={product.id} className="relative  text-center  rounded p-5  bg-black " style={{ width: "19rem", height: "350px", }}>
                        <div className='flex justify-center'>
                            <img src={product.image} height="50" width="130"
                                className="h-40 w-40 " alt="..." style={{ objectFit: "contain" }} />
                        </div>
                        <div className="card-body text-white absolute bottom-0 right-0 text-center w-full ">
                            <h5 className="">${product.title}</h5>
                            <p className=" ">${product.price}.</p>
                            <button className="px-3 bg-slate-400 w-full text-center">Shop Now</button>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )

}

export default Card