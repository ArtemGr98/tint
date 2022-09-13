import styled from "styled-components";
import {useState} from "react";
import {portfolioApi} from "../../api/instance";

const PaginationWrapper = styled.div`
    padding: 60px 0;
`
const PaginationItem = styled.span`
  margin-right: 10px;
  cursor: pointer;
  padding: 2px;

  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: ${props => (props.children === props.currentPage) ? "#016FD0" : "#000000" };
`

const Pagination = ({totalPages, setPortfolioImg}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const curP = currentPage
    let curPF = ((curP - 4) < 0) ? 0 : curP - 4
    if (totalPages - 4 <= curP) {
        curPF = totalPages - 8
    }

    const curPL = ((curP - 4) < 0) ? curP + 4 - (curP - 4) : curP + 4

    const slicedPages = pages.slice(curPF, curPL)

    const onChangePage = (page) => {
        setCurrentPage(page)
        portfolioApi().then(response => setPortfolioImg(response.data))
    }

    return <PaginationWrapper>
        {(curP > 4) && <span>
                <PaginationItem
                    key={1}
                    currentPage={curP}
                    onClick={() => onChangePage(1)}>1</PaginationItem>
            </span>
        }
        {(curP > 5) &&
            <PaginationItem> ... </PaginationItem>
        }
        {slicedPages.map(page => <PaginationItem
            key={page}
            currentPage={currentPage}
            onClick={() => onChangePage(page)}>{page}</PaginationItem>)
        }
        {(curP < totalPages - 5) &&
            <PaginationItem> ... </PaginationItem>
        }
        {(curP < totalPages - 4) && <span>
            <PaginationItem
                key={totalPages}
                currentPage={curP}
                onClick={() => onChangePage(totalPages)}>{totalPages}</PaginationItem>
            </span>
        }
    </PaginationWrapper>

}

export default Pagination