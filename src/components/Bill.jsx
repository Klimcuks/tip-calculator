
const Bill = ({setTotal}) => {
  return (
    <div>
        <input type="text" name="bill" onChange={(e)=>setTotal(Number(e.target.value))}>
        </input>
    </div>
  )
}

export default Bill