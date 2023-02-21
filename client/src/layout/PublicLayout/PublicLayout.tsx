import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"


const PublicLayout = ({ children }: { children: Function }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default PublicLayout