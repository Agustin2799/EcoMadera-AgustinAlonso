import React from 'react'

const ItemCategoryLabel = ({categories}) => {
  return (
      <>
          {categories.map((category, inx) => {
              return (
                  <div className=' flex items-center rounded-full text-sm shadow-md shadow-amber-900 border border-amber-600 text-amber-400 bg-slate-700 font-normal px-4 py-1 me-2 mb-2' key={inx}>{category}</div>
              )
          })}
      </>
  )
}

export default ItemCategoryLabel