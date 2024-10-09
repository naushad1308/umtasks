import useFetch from './useFetch'

function App() {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/albums/1/photos')

  if (error) {
    return <div className='w-full flex justify-center h-screen items-center text-5xl bg-slate-950 text-red-500'>Error: {error.message}</div>;
  }

  return (


    <div className='bg-slate-950 h-screen'>
      <h1 className='text-white text-center text-2xl font-bold py-5'>Photos</h1>
      <div className='w-full flex justify-center flex-wrap h-full gap-3 bg-slate-950'>
        {data ? data.map((photo) => (
          <div key={photo.id} className='p-3 border border-blue-200'>
            <img src={photo.thumbnailUrl} alt="" />
            <p className='text-xs text-white text-center'>{photo.title.slice(0, 15)}</p>
          </div>
        )) : <div className='bg-slate-950'>
          <div className='w-full flex justify-center h-[30rem] items-center text-5xl bg-slate-950 text-red-500'>
            Loading...

          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;