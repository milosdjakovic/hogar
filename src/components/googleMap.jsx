import React from "react"
import MenuItem from "./menuItem"

const GoogleMap = ({ src }) => (
  <MenuItem title="Kako do nas?" style={{ marginBottom: "90%" }}>
    <div id="Kako do nas?" className="my-8 overflow-hidden">
      <iframe
        src={src}
        height="450"
        frameBorder="0"
        className="w-full"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        title="Hogar location"
      />
    </div>
  </MenuItem>
)

export default GoogleMap
