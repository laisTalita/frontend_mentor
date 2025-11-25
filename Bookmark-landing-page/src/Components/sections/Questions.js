import Button  from "../Component/Button"
import { useState } from "react"
import { IoIosArrowDown,IoIosArrowUp} from "react-icons/io";
import styles from './Questions.module.css'

const questions = [
    {
        id: "resp1",
        title: "What is Bookmark?",
        content: (
            <p className="my-4 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
            </p>
        )
    },
    {
        id: "resp2",
        title: "How can I request a new browser?",
        content: (
            <p className="my-4 mb-5">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies.
            </p>
        )
    },
    {
        id: "resp3",
        title: "Is there a mobile app?",
        content: (
            <p className="my-4 mb-5">
                Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
            </p>
        )
    },
    {
        id: "resp4",
        title: "What about other Chromium browsers?",
        content: (
            <p>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.
                Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
            </p>
        )
    }
]
function Questions() {
    const [open, setOpen] = useState(null)
    
    return(
        <section className={`${styles.questions} mx-auto d-flex flex-column text-center align-items-center gap-5 gap-lg-4`}>
            <div>
                <h2 className="mb-3 mb-lg-2">Frequently Asked Questions</h2>
                <p>
                    Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.
                </p>
            </div>

            <div className={ `${styles.boder_itens} w-100 d-flex flex-column  gap-4 gap-lg-1`}>
                {questions.map((items)=>(
                    <div key={items.id} className= {`${styles.itens_questions} text-start p-0`}>
                        <div className="d-flex justify-content-between   align-items-start align-items-md-center" onClick={()=> setOpen(open=== items.id? null:items.id)}>
                            <p>{items.title}</p>
                            {open === items.id?<IoIosArrowUp className={styles.iconQuestions}/>
                            :<IoIosArrowDown className={styles.iconsQuestions}/>}
                        </div>
                        {open === items.id && 
                        items.content}
                
                    </div>
                )) 
                           }
            </div>
            <Button className={`${styles.but_questions} mt-lg-4 btn-primary`} text={"More Info"}/>
        </section>
    )
} export default Questions