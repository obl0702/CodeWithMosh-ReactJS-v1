import React from 'react'
import ExpandableText from '../components/ExpandableText'

function LessonExpandableText () {
  

  
    return (
    <div>
        {/** when text more than maxChars. it will hide the rest with button "more", can expand it then minimize again with "less" */}
        <ExpandableText maxChars={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate deleniti fugiat delectus ipsum animi, officiis perspiciatis iure! Explicabo distinctio suscipit vero. Delectus repellat, expedita quae adipisci exercitationem eaque nemo explicabo repellendus commodi architecto facilis doloremque id hic aperiam aspernatur aliquid, a magni quasi officia, nobis laborum minus rem dignissimos. Quasi neque atque optio cumque quia magnam pariatur, eum eveniet est expedita fugit officiis facilis totam, veniam iste sunt a sed voluptatibus voluptates laudantium vel excepturi ducimus voluptatem ipsa? Officia nisi consequatur ipsa totam explicabo iste sint consectetur id. Corrupti, inventore atque. Voluptatibus illo dolorum voluptatum similique, perspiciatis consequatur quod.
        </ExpandableText>
    </div>
  )
}

export default LessonExpandableText