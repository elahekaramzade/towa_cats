<template>
  <div class="col-span-1 border border-gray-200 rounded-md shadow-lg h-full transition-all ease-in duration-300 cursor-pointer  hover:-translate-y-1">
    <div class="flex flex-col w-full">
      <div class="bg-white">
        <img
          src="../../assets/img/SVG/yoda.svg"
          alt=""
          class="h-full w-full rounded-md"
        >

      </div>
      <div class="bg-black text-slate-200 rounded-b-md flex flex-col h-full p-2 font-bold">
        <div class="flex justify-between text-sm">
          <h2>Name</h2>
          <span>{{character.name}}</span>
        </div>
        <div class="flex justify-between text-sm">
          <h2>Skin color</h2>
          <span>{{character.skin_color}}</span>
        </div>
        <div class="flex justify-between text-sm">
          <h2>Hair Color</h2>
          <span>{{character.hair_color}}</span>
        </div>
        <div class="flex justify-between text-sm">
          <h2>Gender</h2>
          <span>{{character.gender}}</span>
        </div>
        <div class="flex justify-between text-sm">
          <h2>Height</h2>
          <span>{{character.height}}</span>
        </div>
        <div class="flex justify-between text-sm">
          <h2>Mass</h2>
          <span>{{character.mass}}</span>
        </div>
        <div class="flex justify-between text-sm">
          <h2>Home World</h2>
          <a
            :href="character.homeworld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
};
</script>

<style>
</style>