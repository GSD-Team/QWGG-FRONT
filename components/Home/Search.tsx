export default function HomeSearch() {
  return (
    <div className="flex justify-center w-full">
      <div className="mt-1 flex rounded-md shadow-sm w-2/4 h-14">
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 px-8"
          placeholder="www.example.com"
        />
      </div>
    </div>
  );
}
