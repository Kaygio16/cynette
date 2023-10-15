import { DashboardHandler } from '../../interface/interface'
import Navbar from './Shared/Navbar'

const PageHandler = (props: DashboardHandler) => {
    return (
        <>
        {props.header && <Navbar />}
        {props.children}
        </>
    )
}

export default PageHandler