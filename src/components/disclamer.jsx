import React from "react"
import MenuItem from "./menuItem"

const Disclamer = () => {
  return (
    <MenuItem title="Važno">
      <p className="mt-4 text-2xl text-gray-700 font-patrick">
        Cene na našoj veb stranici mogu se razlikovati od stvarnih cena u našim
        prodavnicama.
      </p>
    </MenuItem>
  )
}

export default Disclamer
