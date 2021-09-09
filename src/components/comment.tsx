import { comment } from "../data/Storecomment"
import commentlist from "./commentlist"

const Comments = () =>{
    const state = comment.useState()
    
    return(
        <div className="flex p-2 items-start space-x-2">
    <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
    <div className="bg-gray-500 rounded-lg p-2">
      <p className="font-semibold text-white">Lisa</p>
      <p className='text-white'>จริงค่า</p>
      {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
      <div className='flex items-center'>
        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
        <p className='text-gray-300'>999 คน</p>
      </div>
    </div>
  </div>
        )
}

export default Comments