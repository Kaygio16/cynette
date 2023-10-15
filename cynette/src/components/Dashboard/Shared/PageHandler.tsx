import { DashboardHandler } from '../../../interface/interface'
import Navbar from './Navbar'

const PageHandler = (props: DashboardHandler) => {
    return (
        <>
        {props.header && <Navbar />}
        {props.children}
        </>
    )
}

export default PageHandler