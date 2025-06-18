import React from "react";
import { FaAngleRight, FaAngleLeft, FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const goToFirstPage = () => setCurrentPage(1)
    const goToLastPage = () => setCurrentPage(totalPages)
    const goToPreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1))
    const goToNextPage = () => setCurrentPage(Math.min(totalPages, currentPage + 1))

    return (
        <div className="w-full flex justify-center items-center gap-1">
            <button
                variant="outline"
                size="sm"
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0 disabled:opacity-40"
            >
                <FaAnglesLeft className="h-4 w-4" />
            </button>
            <button
                variant="outline"
                size="sm"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0 disabled:opacity-40"
            >
                <FaAngleLeft className="h-4 w-4" />
            </button>
            <div>
            </div>
            <div>


                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber
                    if (totalPages <= 5) {
                        pageNumber = i + 1
                    } else if (currentPage <= 3) {
                        pageNumber = i + 1
                    } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i
                    } else {
                        pageNumber = currentPage - 2 + i
                    }

                    return (
                        <button
                            key={pageNumber}
                            size="sm"
                            onClick={() => setCurrentPage(pageNumber)}
                            className={`size-10 p-0 ${currentPage === pageNumber ? "font-bold border-b-2 border-blue-500" : ""}`}
                        >
                            {pageNumber}
                        </button>
                    )
                })}
            </div>
            <button
                variant="outline"
                size="sm"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0 disabled:opacity-40"
            >
                <FaAngleRight className="h-4 w-4 " />
            </button>
            <button
                variant="outline"
                size="sm"
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0 disabled:opacity-40"
            >
                <FaAnglesRight className="h-4 w-4" />
            </button>
        </div>
    );
}

export default Pagination;