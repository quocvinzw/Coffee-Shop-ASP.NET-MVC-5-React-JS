/* eslint-disable jsx-a11y/anchor-is-valid */

function Message(props) {
    return (
        <div className={`alert alert-dismissible fade show ${props.type} `} id="rmAlert">
            <a href="#" className="close" data-bs-dismiss="alert" aria-label="close" >&times;</a>
            {props.children}
        </div>
    )
}

export default Message
