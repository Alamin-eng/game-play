import { useState } from "react";

export default function Pagination({props, selectPlatform, selectGenre}){
//  pagination
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 12;
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const filteredData = props
     .filter(
       (item) =>
         selectPlatform === "Platform" || selectPlatform === item.platform
     )
     .filter((item) => selectGenre === "Genre" || selectGenre === item.genre)
     const currentItems = filteredData.slice(
         indexOfFirstItem,
         indexOfLastItem
       );

       const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredData.length / itemsPerPage),
        }).map((_, index) => (
          <span key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </span>
        ))}
      </div>
    );
}