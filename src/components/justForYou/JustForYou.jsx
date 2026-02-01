
import { NavLink } from "react-router";
import { CiEdit } from "react-icons/ci";
import { MdOutlineFolderDelete } from "react-icons/md";

import './justForYou.css'
import Swal from "sweetalert2";
import { useState } from "react";


const JustForYou = ({ products, serverData, setServerData }) => {
  const { url, _id, short_name, long_name, catagory, description, present_price, previous_price, discount, parcentage } = products;

  // const [products, setProducts] = useState(products);


  const handleDelet = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed, _id);
        console.log("after delet", _id);

        fetch(`http://localhost:3000/products/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              // console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success"
              });
              const remainingProducts = serverData.filter(single_products=> single_products._id !== _id);
              setServerData(remainingProducts)
            }
          })


      }
    });
  }


  return (
    <div className=" pb-10">
      <NavLink to={`/product-details/${_id}`} className=''>
        <div className=" justify-between card_flash_sale bg  border border-[#ee3f3686] rounded-[3px] ">
          <img className="rounded-t-[3px] object-cover " src={url} alt="" />
          <div className=" pl-1">
            <h2 className="text-[#2e2c2c] font-bold pt-1 text-xs">{short_name}</h2>
            <h2 className="text-[#fff] ">৳ {present_price}</h2>
            <p>
              <span className=" ">
                <span className="text-[#ffffff7e] line-through">{previous_price}</span>
              </span > <span className="text-[#fff]">-{parcentage}%</span>
            </p>
          </div>
        </div>
      </NavLink>
      <div className="viwe_delet flex gap-3 mt-1 justify-end">
        <NavLink to={`/product-update/${_id}`} className=''>
          <CiEdit />
        </NavLink>
        <button onClick={() => handleDelet(_id)} className="delet cursor-pointer">
          <MdOutlineFolderDelete />
        </button>

      </div>
    </div>
  )
}

export default JustForYou
