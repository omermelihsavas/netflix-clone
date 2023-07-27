import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function PrewArrow() {
    return (
        <div className="prew-arrow">
            <FontAwesomeIcon icon={faChevronLeft} size="2xl" style={{ color: "#ffffff", cursor: "pointer"}} />
        </div>
    )
}
