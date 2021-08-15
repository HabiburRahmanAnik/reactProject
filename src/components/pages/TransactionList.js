import React from 'react'

const TransactionList = (props) => {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.bankname}</td>
            <td>{props.customerName}</td>
            <td>{props.amount}</td>
            <td>{props.withdrawMethod}</td>
        </tr>
    )
}

export default TransactionList
