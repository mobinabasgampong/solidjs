import { FaBrandsGlideG } from "solid-icons/fa";
import { Component } from "solid-js";
import { ImSpinner9 } from "solid-icons/im";
type Props = {
  size: number;
};
const Loader: Component<Props> = (props) => {
  return (
    <div class="flex-it text-white justify-center items-center h-full">
      <div class="rotating">
        {/* <FaBrandsGlideG size={props.size} /> */}

        <ImSpinner9 size={props.size} />
      </div>
    </div>
  );
};

export default Loader;
