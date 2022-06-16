import { Link } from "react-router-dom"

function LaunchPage(){
    return(
        <>
            <h1>Chapter 1: Placeholder</h1>
            <div>
                <paragraph>Test in Launch</paragraph>
                <br></br>
                <paragraph>This is the song that never ends, yes it goes on and on my frined.....</paragraph>
            </div>
            <Link link to='/chapteronefirstchoice'><button>Go through door number 1 </button></Link>
            <Link link to='/chapteronesecondchoice'><button>Go through door number 2 </button></Link>
        </>
    )
}
export default LaunchPage