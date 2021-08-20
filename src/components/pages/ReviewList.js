import React from 'react'

const ReviewList = ({name,message}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{message}</td>
        </tr>
    );
}

export default ReviewList;
