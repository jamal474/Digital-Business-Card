import phts from '../images/header-photo.jpg'

function header() {
    return (
    <div className="header">
        <img src={phts} className="profile"/>
    </div>
    );
}

export default header;
