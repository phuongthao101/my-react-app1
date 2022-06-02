import React from 'react';
import PropTypes from 'prop-types'



const Pagination = (props) => {
    const { pagination, onPageChange } = props
    const { _page, _limit, _totalRows } = pagination
    const totalPages = Math.ceil(_totalRows / _limit)

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div className='pagination'>
            <button
                onClick={() => { handlePageChange(_page - 1) }}
                dissabled={_page === 1}
            >Previous</button>

            <button
                onClick={() => { handlePageChange(_page + 1) }}
                dissabled={_page === totalPages}
            >Next </button>

        </div>
    )

}



Pagination.propTypes = {
    onPageChange: PropTypes.func,
    pagination: PropTypes.object.isRequired,
}
Pagination.defaultProps = {
    onPageChange: null,

}
export default Pagination