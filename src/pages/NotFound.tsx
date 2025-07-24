
// This component displays a 404 Not Found page.
// It informs the user that the page they are looking for does not exist.

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-[#FFEB00]">404</h1>
      <p className="text-2xl text-[#2A004E] mt-4">Page Not Found</p>
      <p className="text-lg text-gray-500 mt-2">The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound
