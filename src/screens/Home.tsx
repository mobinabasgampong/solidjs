import {
  Component,
  createSignal,
  createUniqueId,
  For,
  onCleanup,
  onMount,
} from "solid-js";

import { FaRegularImage } from "solid-icons/fa";

import MainLayout from "../components/layout/Main";

import GlidePost from "../components/glides/GlidePost";
import { Glide } from "../types/Glide";

const HomeScreen: Component = () => {
  const [content, setContent] = createSignal("");
  const [glides, setGlides] = createSignal<Glide[]>([]);

  const createGlide = () => {
    const glide = {
      id: createUniqueId(),
      content: content(),
      user: {
        nickName: "Filip99",
        avatar:
          "https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png",
      },
      likesCount: 0,
      subglidesCount: 0,
      date: new Date(),
    };
    // console.log(content())
    // setGlides((prev) => {
    //   return [...prev, glide];
    // });

    setGlides([glide, ...glides()]);

    setContent("");
    // console.log(JSON.stringify(glides()));
  };

  onMount(() => {
    console.log("On mount");
  });
  onCleanup(() => {
    console.log("On cleaned up");
  });
  return (
    <MainLayout>
      {/* HOME PAGE START */}
      <div class="flex-it py-1 px-4 flex-row">
        <div class="flex-it mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img
              class="rounded-full"
              src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
            ></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex-it flex-grow">
          <div class="flex-it">
            <textarea
              onInput={(e) => {
                // console.log(e.currentTarget.value)
                setContent(e.currentTarget.value);
              }}
              value={content()}
              name="content"
              rows="1"
              id="glide"
              class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
              placeholder={"What's new?"}
            />
          </div>
          <div class="flex-it mb-1 flex-row xs:justify-between items-center">
            <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
              <div class="upload-btn-wrapper">
                <FaRegularImage class="cursor-pointer" size={18} />
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="flex-it w-32 mt-3 cursor-pointer">
              <button
                onClick={() => createGlide()}
                type="button"
                class="
                            disabled:cursor-not-allowed disabled:bg-gray-400
                            bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
              >
                <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                  <span>Glide It</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* MESSENGER END */}
      </div>
      <div class="h-px bg-gray-700 my-1" />
      {/* GLIDE POST START */}
      <For each={glides()}>{(items) => <GlidePost glide={items} />}</For>

      {/* GLIDE POST END */}
      {/* HOME PAGE END */}
    </MainLayout>
  );
};

export default HomeScreen;
