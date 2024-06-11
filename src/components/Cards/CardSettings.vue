<template>
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
    <div class="px-6 py-6 mb-0 bg-white rounded-t">
      <div class="flex justify-between text-center">
        <h6 class="text-xl font-bold text-blueGray-700">My account</h6>
        <button
          class="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
          type="button">
          Settings
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
      <form>
        <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
          User Informations
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Username
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="lucky.jesse" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Email address
              </label>
              <input type="email"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="jesse@example.com" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                First Name
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="Lucky" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Last Name
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="Jesse" />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Address
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                City
              </label>
              <input type="email"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="New York" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Country
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="United States" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Postal Code
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                value="Postal Code" />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
          About Me
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                About me
              </label>
              <textarea type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                rows="4">
                    A beautiful UI Kit and Admin for VueJS & Tailwind CSS. It is Free
                    and Open Source.
                  </textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
