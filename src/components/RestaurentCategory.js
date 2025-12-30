const RestaurentCategory = ({data})=>{
 console.log(data);
    return(

        <div >
            <div  className="w-6/12 mx-auto my-8 bg-gray-100 shadow-lg p-4 flex justify-between">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>

                <span>🔽</span>
            </div>
        </div>
    )
}


export default RestaurentCategory;