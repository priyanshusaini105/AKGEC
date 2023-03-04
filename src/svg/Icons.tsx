import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';

export function DocumentsIcon() {
  return (
    <Svg width="48" height="48" viewBox="0 0 512 512">
      <Path
        d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224ZM336,384H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z"
        fill="#345FB4"
      />
      <Path
        d="M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z"
        fill="#203c73"
      />
    </Svg>
  );
}

export function NoticeIcon() {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="48"
      width="48">
      <Path
        d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z"
        stroke="none"
        fill="#345FB4"
      />
    </Svg>
  );
}

export function TimeTableIcon() {
  return (
    <Svg width={45} height={48} viewBox="0 0 45 48" fill="none">
      <G filter="url(#filter0_d_0_1395)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.621 39.978H6.365c-.058-.055-.106-.137-.175-.161C4.362 39.172 4 38.674 4 36.781V8.708c0-2.559 1.267-3.81 3.86-3.814 1.685 0 3.373-.048 5.056.019.776.031 1.036-.181.937-.951-.174-1.356.03-2.578 1.417-3.272h1.222a2.574 2.574 0 011.534 2.8c-.02.23.021.468-.011.7-.08.564.129.731.705.723 2.206-.034 4.414-.06 6.618.009.9.028 1.237-.2 1.11-1.117A2.614 2.614 0 0128.017.689h1.048a2.393 2.393 0 011.559 1.914 8.24 8.24 0 010 1.481c-.064.629.112.849.793.828 1.744-.055 3.49-.04 5.235-.014 2.519.038 3.781 1.321 3.781 3.807V36.89a2.726 2.726 0 01-2.487 2.911c-.13.024-.303-.036-.325.177zM22.163 16.137c4.916 0 9.834-.006 14.75.009.52 0 .769-.062.758-.692a243.864 243.864 0 010-7.156c.005-.5-.146-.632-.636-.623-1.6.03-3.2.012-4.8.01-1.5 0-1.5 0-1.59 1.482a2.09 2.09 0 01-2.102 2.016 2.079 2.079 0 01-2.11-2.079 2.569 2.569 0 01.006-.523c.117-.7-.1-.94-.863-.917-2.035.061-4.073.022-6.108.02-1.355 0-1.352 0-1.45 1.365a3.421 3.421 0 01-.108.6 2.057 2.057 0 01-2.31 1.526 2 2 0 01-1.755-1.952 7.023 7.023 0 010-.959c.047-.46-.126-.593-.582-.587-1.948.023-3.9.032-5.847 0-.553-.01-.68.162-.674.691.03 2.181.016 4.363.016 6.544 0 1.227 0 1.227 1.262 1.227l14.143-.002zm-3.254 11c.013-.026.019-.064.039-.075.129-.066.259-.131.392-.187a3.412 3.412 0 002.3-3.359 3.484 3.484 0 00-2.316-3.366 8.469 8.469 0 00-5.7-.1c-1.916.527-1.912.538-1.373 2.376.033.11.058.224.077.338.092.562.309.606.84.369a5.034 5.034 0 013.787-.429c.613.16 1.051.7 1.08 1.334a1.5 1.5 0 01-.894 1.469 4.808 4.808 0 01-1.41.393c-.642.117-1.547-.3-1.87.247-.308.519-.064 1.354-.1 2.048-.025.458.134.6.595.6a8.04 8.04 0 012.507.173 1.9 1.9 0 011.578 1.991c-.035.887-.6 1.455-1.67 1.707a6.953 6.953 0 01-4.15-.55c-.2-.075-.5-.366-.593-.11a21.792 21.792 0 00-.674 2.492c-.041.179.22.256.372.317a9.5 9.5 0 008.064-.042 4.111 4.111 0 002.348-4.2c-.237-1.875-1.195-2.894-3.229-3.434v-.002zm9.632-4v.947c0 2.734-.014 5.468.008 8.2.008.918-.405 2.181.172 2.66.556.461 1.773.1 2.7.149.486.025.635-.115.633-.619-.02-4.74-.02-9.481 0-14.222 0-.564-.195-.631-.7-.671a6.779 6.779 0 00-4.3 1.03c-.657.414-1.721.5-1.978 1.131-.247.605.211 1.486.318 2.252.064.459.226.524.628.322.795-.397 1.608-.755 2.521-1.18l-.002.001z"
          fill="#345FB4"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export const AssignmentIcon = () => {
  return (
    <Svg width={29} height={42} viewBox="0 0 29 42" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.239.99a6.715 6.715 0 015.278 4.623 6.519 6.519 0 01-6.248 8.4 6.65 6.65 0 01-6.4-4.967 6.7 6.7 0 013.663-7.488c.517-.239 1.077-.384 1.618-.573l2.089.005zM4.217 39.401c0-1.427-.041-2.62.029-3.806a1.3 1.3 0 01.625-.813 5.434 5.434 0 00.018-9.175 1.31 1.31 0 01-.642-.8c-.071-1.224-.03-2.455-.03-3.724 4.124-.618 7.537.328 10.272 3.509 2.557-3.62 6.278-3.678 10.25-3.5 0 1.305.025 2.563-.022 3.817a1.094 1.094 0 01-.474.677 5.49 5.49 0 00-.006 9.162c.26.186.433.468.481.784.051 1.268.023 2.539.023 3.987-3.792-1.088-7.383-1.289-10.39 1.895-2.905-2.724-6.314-3.004-10.134-2.013z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.435 25.487c-1.1.041-1.4-.534-1.334-1.573.08-1.23.01-2.47 0-3.706a1.519 1.519 0 00-.14-.348c-4.083-.2-8.223-.553-11.51 2.83-.438-.346-.826-.659-1.22-.96-2.887-2.215-6.22-2.243-9.608-1.9-.249.024-.612.527-.64.833a19.09 19.09 0 00-.063 3.124c.085 1.174-.34 1.8-1.56 1.853 0-1.38-.074-2.77.015-4.148a4.425 4.425 0 014.377-4.357c5.984-.109 11.972-.086 17.958-.058a4.376 4.376 0 013.678 3.26c.129 1.714.144 3.434.047 5.15zM.523 29.915c.128-.609.307-1.206.536-1.784a2.4 2.4 0 012.41-1.627 2.515 2.515 0 012.342 2.061 8.5 8.5 0 01-.034 3.262 2.6 2.6 0 01-2.459 2.069 2.735 2.735 0 01-2.488-2.2c-.144-.508-.185-1.047-.307-1.781zM28.597 30.451a8.472 8.472 0 01-.47 1.824 2.526 2.526 0 01-2.338 1.61 2.48 2.48 0 01-2.283-1.667 4.832 4.832 0 01-.075-3.916 2.667 2.667 0 012.665-1.814 3.161 3.161 0 012.352 2.406c.074.415.084.841.149 1.557z"
        fill="#345FB4"
      />
    </Svg>
  );
};

export function DateSheetIcon() {
  return (
    <Svg width={35} height={36} viewBox="0 0 35 36" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.067 3.348H7.5v.508c0 1.644-.008 3.288 0 4.931a2.955 2.955 0 002.754 2.978 2.993 2.993 0 003.125-2.377A2.8 2.8 0 0011.922 6.3c0 .831.01 1.637 0 2.443a1.446 1.446 0 01-1.155 1.464 1.42 1.42 0 01-1.745-1.369 331.7 331.7 0 010-7.1A1.426 1.426 0 0110.484.373c.773.013 1.4.628 1.43 1.4.02.488 0 .978 0 1.519h10.3c.01.21.024.371.024.533v4.931a2.968 2.968 0 005.872.649 2.843 2.843 0 00-1.4-3.115 2.946 2.946 0 00-.044.349c0 .707.01 1.414-.006 2.12a1.452 1.452 0 11-2.9.006 704.857 704.857 0 010-6.913 1.451 1.451 0 112.9-.011c.012.472 0 .944 0 1.469h6.933c.026.338.057.625.068.913.227 5.679.453 11.357.677 17.035.134 3.345.274 6.69.422 10.036a4.047 4.047 0 01-4.209 4.429c-8.449.007-16.899.007-25.349 0a4.062 4.062 0 01-4.3-4.563c.142-2.961.244-5.924.364-8.886l.65-16.067c.052-.941.104-1.889.151-2.859zm1.61 11.023c-.016.159-.033.264-.036.369-.187 5.557-.351 11.114-.574 16.669a2.007 2.007 0 002.1 2.164c8.449-.029 16.9-.015 25.346-.017a1.864 1.864 0 002.082-2.152c-.217-5.325-.44-10.65-.67-15.974-.014-.348-.048-.694-.074-1.059H3.677z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.208 21.311c.643 0 1.287.019 1.929-.014a.568.568 0 00.406-.306c.387-1.048.74-2.107 1.105-3.163.045-.131.084-.263.132-.393a1.1 1.1 0 011.082-.835 1.08 1.08 0 011.04.827c.406 1.156.816 2.311 1.19 3.478.05.276.314.46.592.414 1.2 0 2.393.039 3.59.062a1.133 1.133 0 011.188.755 1.105 1.105 0 01-.521 1.306c-.954.723-1.9 1.451-2.873 2.154a.528.528 0 00-.228.693c.367 1.138.71 2.283 1.059 3.427a1.109 1.109 0 01-1.777 1.271c-.993-.7-1.99-1.387-2.973-2.1a.439.439 0 00-.607 0c-.984.708-1.982 1.4-2.975 2.092a1.108 1.108 0 01-1.777-1.267c.348-1.144.692-2.289 1.059-3.427a.528.528 0 00-.226-.694c-.993-.721-1.968-1.468-2.947-2.209a1.088 1.088 0 01.646-2c.629-.01 1.258 0 1.887 0l-.001-.071z"
        fill="#345FB4"
      />
    </Svg>
  );
}

export function ChangePasswordIcon() {
  return (
    <Svg width={33} height={42} viewBox="0 0 33 42" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.407 20v19.352a2.982 2.982 0 01-2.062 2.062H3.062A3.03 3.03 0 011 39.193V20.159c.693-1.849 1.244-2.22 3.3-2.22h2.208v-.933c0-1.953-.015-3.906 0-5.858a10.075 10.075 0 016.525-9.471 25.81 25.81 0 012.56-.71h2.221c.086.055.18.098.278.128a9.865 9.865 0 018.619 8.137c.24 2.013.328 4.042.266 6.068.026.86 0 1.72 0 2.641.81 0 1.521.043 2.224-.009A2.787 2.787 0 0132.407 20zm-21.948-2.117h12.592c0-2.223.008-4.388 0-6.553a6.359 6.359 0 00-5.2-6.2 6.341 6.341 0 00-7.03 4.018c-.189.433-.305.894-.342 1.365-.038 2.448-.02 4.896-.02 7.37zm4.822 14.354c0 2.421 0 2.421 2.187 2.3h.08c.432.018.609-.173.594-.619-.026-.765.01-1.532-.012-2.3a2.245 2.245 0 01.81-2.107 2.962 2.962 0 00-.021-4.421 3.127 3.127 0 00-4.47.091 2.972 2.972 0 00.078 4.372c.588.437.88 1.168.757 1.891-.019.264-.005.529-.005.793h.002z"
        fill="#345FB4"
      />
      <Path
        d="M32.407 39.352l.481.136.019-.067v-.069h-.5zm-2.062 2.062v.5h.07l.066-.019-.136-.481zm-27.283 0l-.147.478.072.022h.075v-.5zM1 39.193H.5v.056l.013.055.487-.111zm0-19.034l-.468-.175-.032.084v.091H1zm3.3-2.22v-.5.5zm2.208 0v.5h.5v-.5h-.5zm0-6.791l.5.004v-.006l-.5.002zm6.525-9.471l-.158-.474-.01.003-.008.003.176.468zm2.56-.71v-.5h-.055l-.054.011.109.488zm2.221 0l.272-.42-.124-.08h-.148v.5zm.278.128l-.144.479.043.013.045.005.056-.497zm8.619 8.137l.497-.059-.002-.013-.002-.012-.493.084zm.266 6.068l-.5-.015v.03l.5-.015zm0 2.641h-.5v.5h.5v-.5zm2.224-.009l.037.499.027-.002.026-.005-.09-.492zm-6.15-.049v.5h.5v-.5h-.5zm0-6.553l.5-.002v-.002l-.5.004zm-5.2-6.2l.091-.492h-.004l-.087.492zm-7.03 4.018l.458.2.006-.012.005-.012-.469-.176zm-.342 1.365l-.498-.04-.001.016v.016l.5.008zm-.02 7.37h-.5v.5h.5v-.5zm4.822 14.354h.5v-.5h-.5v.5zm2.187 2.3v-.5h-.027l.027.5zm.08 0l.02-.5h-.02v.5zm.594-.619l.5-.017-.5.017zm-.012-2.3l.5-.015-.002-.032-.005-.032-.494.079zm.81-2.107l.314.39.01-.009.011-.01-.334-.371zm.98-2.215l.5-.003-.5.003zm-1.002-2.206l-.35.357.01.01.01.008.33-.375zm-2.253-.894l-.01-.5.01.5zm-2.215.985l.345.362.01-.01.009-.01-.364-.342zm-.92 2.203l-.5.009.5-.01zm.997 2.169l-.333.374.017.014.017.013.299-.401zm.757 1.891l-.493-.085-.005.025-.001.026.498.034zm-.005.793h-.5v.5h.5v-.5zM31.907 20v19.352h1V20h-1zm.019 19.217a2.481 2.481 0 01-1.716 1.716l.27.962a3.482 3.482 0 002.408-2.407l-.962-.271zm-1.581 1.697H3.062v1h27.283v-1zm-27.136.022a2.53 2.53 0 01-1.722-1.854l-.974.222a3.53 3.53 0 002.402 2.588l.294-.956zM1.5 39.193V20.159h-1v19.034h1zm-.032-18.858c.344-.918.61-1.336.95-1.564.344-.232.857-.332 1.882-.332v-1c-1.03 0-1.822.086-2.44.502-.624.42-.98 1.111-1.328 2.043l.936.35zM4.3 18.438h2.208v-1H4.3v1zm2.708-.5v-.933h-1v.933h1zm0-.933c0-1.959-.015-3.904 0-5.854l-1-.008c-.015 1.954 0 3.914 0 5.862h1zm0-5.86a9.575 9.575 0 016.201-9.001l-.352-.936a10.575 10.575 0 00-6.849 9.941l1-.004zm6.184-8.995a25.308 25.308 0 012.51-.697l-.218-.976c-.882.197-1.752.438-2.61.725l.318.948zm2.401-.685h2.221v-1h-2.221v1zm1.95-.08c.125.08.261.144.405.188l.288-.958a.59.59 0 01-.15-.07l-.544.84zm.493.206a9.365 9.365 0 018.182 7.724l.986-.168a10.365 10.365 0 00-9.056-8.55l-.112.994zm8.178 7.7c.237 1.988.325 3.991.263 5.993l1 .03a41.29 41.29 0 00-.27-6.142l-.992.118zm.263 6.023c.026.851 0 1.684 0 2.626h1c0-.9.026-1.787 0-2.656l-1 .03zm.5 3.126c.769 0 1.535.043 2.26-.01l-.073-.998c-.68.05-1.336.008-2.187.008v1zm2.314-.017a2.287 2.287 0 012.63 1.697l.971-.242a3.287 3.287 0 00-3.781-2.439l.18.984zm-18.832-.04h12.592v-1H10.46v1zm13.092-.5c0-2.221.008-4.39 0-6.556l-1 .004c.008 2.164 0 4.325 0 6.551h1zm0-6.558a6.859 6.859 0 00-5.608-6.688l-.183.984a5.86 5.86 0 014.791 5.712l1-.008zm-5.613-6.689a6.841 6.841 0 00-7.585 4.335l.937.352a5.84 5.84 0 016.475-3.701l.173-.986zm-7.575 4.31c-.211.484-.34 1-.382 1.527l.997.078c.033-.415.135-.822.301-1.204l-.916-.4zm-.384 1.558c-.038 2.454-.02 4.909-.02 7.378h1c0-2.479-.018-4.92.02-7.362l-1-.016zm4.803 21.732c0 .594-.001 1.078.036 1.448.036.359.116.728.375 1 .268.283.633.36.977.383.346.023.793-.002 1.326-.032l-.055-.998c-.56.03-.934.05-1.203.032-.27-.018-.316-.07-.32-.074-.016-.016-.073-.093-.105-.412-.03-.307-.032-.73-.032-1.347h-1zm2.686 2.8H17.548v-1h-.001-.001-.002-.002-.002-.002-.002-.002-.002-.002-.002-.001-.001-.001-.002-.002-.002-.002-.001-.001-.001-.002-.002-.001-.001-.001-.002-.002-.002-.001-.001-.001-.002-.002-.002-.002-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.002-.002v1zm.059 0c.277.011.606-.037.847-.29.235-.247.276-.574.267-.846l-1 .034a.526.526 0 01-.009.143c-.004.015-.003 0 .018-.021.022-.023.04-.028.036-.027a.402.402 0 01-.118.007l-.041 1zM18.64 33.9c-.012-.37-.01-.743-.007-1.128.003-.381.007-.775-.005-1.17l-1 .03c.012.373.008.747.005 1.132-.003.382-.006.775.008 1.17l1-.034zm-.018-2.362c-.1-.62.141-1.245.63-1.638l-.625-.78a2.745 2.745 0 00-.992 2.576l.987-.158zm.652-1.657a3.462 3.462 0 001.145-2.589l-1 .005a2.462 2.462 0 01-.814 1.842l.67.742zm1.145-2.589a3.462 3.462 0 00-1.17-2.578l-.663.75c.527.464.83 1.131.833 1.833l1-.005zm-1.151-2.56a3.627 3.627 0 00-2.614-1.037l.02 1a2.627 2.627 0 011.893.75l.7-.713zm-2.614-1.037a3.627 3.627 0 00-2.57 1.143l.729.684a2.627 2.627 0 011.861-.827l-.02-1zm-2.55 1.123a3.473 3.473 0 00-1.075 2.574l1-.018a2.473 2.473 0 01.765-1.832l-.69-.724zm-1.075 2.574c.017.97.44 1.889 1.164 2.534l.665-.748a2.473 2.473 0 01-.83-1.804l-1 .018zm1.198 2.561c.437.325.655.869.563 1.405l.985.17a2.446 2.446 0 00-.951-2.377l-.597.802zm.557 1.456c-.02.286-.006.6-.006.827h1c0-.3-.013-.517.003-.759l-.997-.068zm.494 1.327h.002v-1h-.002v1z"
        fill="#000"
      />
    </Svg>
  );
}

export function EventsIcon() {
  return (
    <Svg width={41} height={39} viewBox="0 0 41 39" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.68 20.978a8.729 8.729 0 10-.007 17.458 8.729 8.729 0 00.008-17.458h-.002zm.56 15.182v-.754a.562.562 0 00-1.123 0v.754a6.485 6.485 0 01-5.891-5.891h.756a.562.562 0 000-1.123h-.756a6.485 6.485 0 015.89-5.891v.755a.561.561 0 101.124 0v-.751a6.483 6.483 0 015.89 5.89h-.756a.561.561 0 100 1.124h.757a6.483 6.483 0 01-5.89 5.886h-.001z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.932 28.864h-2.025a1.494 1.494 0 00-1.227-.648h-.025l-1.845-2.6a.843.843 0 00-1.373.979l1.846 2.6c-.06.163-.091.336-.093.51a1.49 1.49 0 002.717.842h2.025a.844.844 0 000-1.687v.004zM8.4 12.332a2.763 2.763 0 002.765-2.763v-6a2.763 2.763 0 10-5.526 0v6A2.762 2.762 0 008.4 12.332zM25.326 12.332a2.763 2.763 0 002.764-2.763v-6a2.763 2.763 0 00-5.526 0v6a2.761 2.761 0 002.762 2.763zM12.146 20.006a1.427 1.427 0 00-1.43-1.428H8.07c-.79 0-1.43.639-1.43 1.428v2.647c0 .79.64 1.43 1.43 1.431h2.648a1.429 1.429 0 001.429-1.431v-2.647zM19.618 20.007c0-.788-.639-1.427-1.427-1.427h-2.653c-.788 0-1.427.639-1.427 1.427v2.647c0 .789.639 1.429 1.428 1.43h2.648a1.429 1.429 0 001.427-1.43l.004-2.647zM23.013 18.578a1.428 1.428 0 00-1.43 1.428v2.647a1.41 1.41 0 001.216 1.385 10.61 10.61 0 014.287-3.807v-.226a1.427 1.427 0 00-1.429-1.428h-2.644zM8.069 25.752c-.79 0-1.43.638-1.43 1.427v2.648a1.429 1.429 0 001.43 1.427h2.649a1.425 1.425 0 001.427-1.427v-2.648a1.426 1.426 0 00-1.427-1.427h-2.65zM18.188 25.753h-2.643c-.788 0-1.427.64-1.427 1.428v2.646a1.426 1.426 0 001.427 1.427h2.647c.788 0 1.427-.639 1.427-1.427v-2.645a1.428 1.428 0 00-1.43-1.43z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.048 33.989H8.615a4.2 4.2 0 01-4.194-4.192V15.763h24.888v3.672c1.45-.344 2.958-.37 4.419-.074V6.163h-3.981v3.4a4.421 4.421 0 11-8.842 0v-3.4h-8.082v3.4a4.421 4.421 0 11-8.842 0v-3.4H0v23.63a8.615 8.615 0 008.615 8.615h16.5c.2 0 .389-.016.582-.03a10.607 10.607 0 01-3.649-4.39z"
        fill="#345FB4"
      />
    </Svg>
  );
}

export function LogoutIcon() {
  return (
    <Svg width={35} height={39} viewBox="0 0 35 39" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9 3.666H17.09v8.162h-3.02v-3.26c0-2.26.016-4.523-.018-6.784-.012-.82.265-1.148 1.122-1.144 6.11.025 12.218.011 18.328.013 1.028 0 1.19.153 1.19 1.157v28.55c0 1.011-.165 1.168-1.173 1.175-.235 0-.472-.02-.7 0-.723.07-1.216-.134-1.13-1.144l-4.936 4.071c-1.246 1.027-2.48 2.068-3.749 3.066-.386.22-.796.393-1.223.516v-1.16c0-8.488-.004-16.976-.013-25.465a1.7 1.7 0 01.69-1.482c2.44-2.01 4.841-4.073 7.44-6.27zm-6.077 19.706c.512.526.871 1.2 1.238 1.208.72.007.786-.782.761-1.342-.024-.516-.1-1.306-.82-1.188-.397.061-.69.744-1.179 1.322z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.754 13.513c2.11 0 4.1-.005 6.092 0 1.51 0 2.208.7 2.214 2.188.007 1.439.007 2.877 0 4.316a1.912 1.912 0 01-2.157 2.162c-2.018.007-4.037 0-6.15 0 0 .412.014.728 0 1.043-.068 1.313-.705 1.692-1.84 1.039-2.334-1.346-4.65-2.726-6.972-4.1-.757-.446-1.524-.879-2.257-1.362-.9-.6-.92-1.372.009-1.93a666.397 666.397 0 019.313-5.49c.988-.573 1.64-.192 1.744.938.03.358.004.71.004 1.196zM14.068 23.82h2.985v1.323c0 1.788-.009 3.575.005 5.363.006.728-.27 1.048-1.046 1.041-1.944-.017-1.944.011-1.944-1.973V23.82z"
        fill="#345FB4"
      />
    </Svg>
  );
}

export function HostelIcon() {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      aria-hidden={true}
      height="48"
      width="48">
      <Path
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm6-5.25v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
        clipRule="evenodd"
        fill="#345FB4"
        stroke="none"
      />
    </Svg>
  );
}

export function HolidayIcon() {
  return (
    <Svg width={58} height={34} viewBox="0 0 58 34" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.08.421c.291.322.55.67.776 1.04.274.7.979 1.132 1.726 1.058.808-.061 1.61-.218 2.412-.348a6.35 6.35 0 017.027 4.838c.073.452.035.914-.109 1.348-.26.826-.617 1.622-.935 2.43-.3.758-.55.841-1.326.418l.15-.565-.424-.244-.348.619-4.257-1.674.211-.632-.485-.194-.272.552c-.875-.205-1-.435-.688-1.24.34-.875.687-1.746 1.08-2.743a8.748 8.748 0 00-1.484-.1c-2.1.231-3.958-2.2-4.117-3.609-.034-.3.255-.637.4-.957l.663.003zm11.4 6.852a4.685 4.685 0 00-.09-.53 5.81 5.81 0 00-6.718-3.95 11.03 11.03 0 01-2.193.278 2.088 2.088 0 01-2.106-1.341c-.08-.206-.19-.4-.325-.575-.076-.089-.252-.092-.384-.134-.045.11-.072.228-.08.347a3.917 3.917 0 003.547 3.04 5.2 5.2 0 012.207.433c1.991.825 4.013 1.591 6.138 2.428l.004.004zM29.976 15.505l1.872-1.1a10.24 10.24 0 001.737.97 3.074 3.074 0 003.85-2.116c.096-.289.269-.546.5-.745a43.15 43.15 0 012.124-1.7.489.489 0 00.189-.658c-.345-.917-.665-1.844-.983-2.77-.206-.6-.044-1.027.433-1.2.477-.173.884.054 1.1.645.42 1.165.82 2.338 1.249 3.5a1.02 1.02 0 01-.4 1.3c-.854.653-1.673 1.349-2.528 2a.713.713 0 00-.312.836c.432 2.044.87 4.09 1.208 6.15a6.26 6.26 0 01-.143 2.072c-.155.637-.35 1.265-.583 1.879l2.985-.643c.253-.055.5-.122.76-.167a1.437 1.437 0 011.826 1.088 1.443 1.443 0 01-1.26 1.668c-1.554.346-3.111.678-4.667 1.016-.434.095-.867.2-1.3.288a1.42 1.42 0 01-1.738-1.877c.138-.475.3-.944.444-1.416l-.148-.116c-.581.607-1.168 1.208-1.734 1.828-.09.139-.147.297-.166.462-.415 1.707-.821 3.416-1.238 5.122a1.44 1.44 0 01-1.69 1.224 1.447 1.447 0 01-1.038-1.947c.366-1.547.852-3.076 1.084-4.643a5.327 5.327 0 012.117-3.256c.459-.326.646-.917.458-1.447-.445-1.831-.764-3.693-1.135-5.543-.024-.123-.065-.242-.12-.438-.751.448-1.458.873-2.17 1.292-.645.38-.874.364-1.435-.136a615.535 615.535 0 01-3.39-3.048c-.5-.45-.558-.914-.19-1.3.351-.368.8-.344 1.275.083 1.043.944 2.09 1.885 3.157 2.843zM20.15 16.9c.384 3.289 2.433 5.485 4.358 7.807a13.39 13.39 0 01-5.636 2.61 10.87 10.87 0 01-4.9-.241 5.87 5.87 0 01-1.43-.7c-.278-.168-.29-.412-.038-.69.861-.944 1.7-1.907 2.538-2.874a.923.923 0 00.251-.52c.02-1.4.011-2.8.011-4.213-.557.288-1.23.614-1.881.98a1.2 1.2 0 01-1.255.015c-1.016-.534-2.068-1-3.065-1.568a1.056 1.056 0 01-.45-.831c.02-.234.381-.493.649-.627.145-.073.424.062.618.155.8.384 1.6.769 2.384 1.193.3.18.677.172.97-.02 1.186-.608 2.366-1.237 3.594-1.75a6.5 6.5 0 016.09.81 8.69 8.69 0 011.734 1.934c.254.295.508.59.742.9a.721.721 0 01-.1 1.085.714.714 0 01-1.086-.1c-.61-.7-1.225-1.393-1.786-2.128-.56-.735-1.403-.877-2.312-1.226zM5.355 21.307c.428.148.841.335 1.234.56 1.261.878 2.486 1.81 3.737 2.7a.706.706 0 01.3.91 8.174 8.174 0 01-2.705 3.718.763.763 0 01-1.052-.014c-1.178-.9-2.391-1.752-3.583-2.632a2.073 2.073 0 01-.5-3.141c.29-.408.583-.813.892-1.206a2.443 2.443 0 011.677-.895zm3.106 2.572a3.87 3.87 0 00-.979.6 23.263 23.263 0 00-1.512 2.044 1.218 1.218 0 00-.075 1.278c.344-1.593 1.538-2.627 2.57-3.922H8.46zm-1.6 4.072c.73-1 1.432-1.958 2.12-2.924.03-.043-.057-.169-.1-.275-.85.826-2.169 2.824-2.015 3.198l-.005.001z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.213 12.4a2.79 2.79 0 01-2.728 2.795 2.819 2.819 0 01-2.828-2.764 2.806 2.806 0 012.74-2.79 2.777 2.777 0 012.816 2.759zm-2.908 1.7c.208-.02.41-.076.6-.165.163-.15.298-.328.4-.525-.176-.065-.35-.144-.53-.191-.6-.155-1.194-.306-1.794-.442a4.458 4.458 0 00-.595-.056c.049.219.032.491.159.649a2.328 2.328 0 001.759.726v.004zM16.217 9.837a2.713 2.713 0 012.707 2.72 2.721 2.721 0 01-2.7 2.675 2.724 2.724 0 01-2.737-2.694 2.724 2.724 0 012.73-2.701zm-1.6 3.467l-.126.159c.166.2.307.526.5.56a4.356 4.356 0 001.562.037c.357-.131.676-.348.93-.632.087-.078.045-.3.062-.46a1.549 1.549 0 00-.449-.015c-.36.135-.73.247-1.105.336-.46.035-.92.04-1.379.015h.005zM18.833 27.875c1.115-.4 2.136-.774 3.164-1.127a.729.729 0 01.465.024c1.134.447 2.264.905 3.391 1.372a1.291 1.291 0 01.816 1.7 1.294 1.294 0 01-1.758.672 439.322 439.322 0 01-5.442-2.214 3.84 3.84 0 01-.636-.427zM12.735 27.158l2.486.661c-.466 1.449-.937 2.938-1.426 4.421-.156.599-.717 1-1.334.957a1.277 1.277 0 01-1.152-1.038 1.043 1.043 0 01.007-.49c.468-1.516.95-3.027 1.419-4.511zM49.727 11.242c.162.276.22.507.358.572.106.05.312-.107.554-.2l.712.235-.4 1.022-7.09-2.782.4-1.016.7.305c.1.227.132.474.24.511.14.05.34-.064.51-.225l4.016 1.578zM23.282 12.629a1.338 1.338 0 01-1.77 1.162 9.537 9.537 0 01-2.145-1.226c-.21-.153-.18-.633-.265-.982a1.923 1.923 0 011.57.368c.339.222.658.475 1 .7.521.339 1.058.528 1.61-.022zM10.337 24.262c-.074-.221-.155-.44-.221-.662a4.026 4.026 0 00-.4-1.291 19.278 19.278 0 00-1.817-1.93c-.313-.308-.629-.255-.86.145a3.312 3.312 0 01-.26.361c-.364.473-.365.472-.91.182.27-.338.54-.683.815-1.022a.901.901 0 011.359-.24 7.238 7.238 0 012.363 2.53c.318.573.369 1.258.138 1.872l-.207.055zM31.985 8.462L27.948 2.91l.721-.368c.74.788 3.454 5.527 3.316 5.92zM9.612 3.944l.8-.384 3.453 5.744-.24.157-4.013-5.517zM33.033 1.095l.477 6.64-.17.045a.878.878 0 01-.15-.271c-.247-1.958-.472-3.919-.732-5.876-.065-.478.255-.431.575-.538zM31.081 9.39c-.131-.049-.266-.091-.393-.149-1.712-.793-3.418-1.6-5.138-2.374-.413-.186-.471-.4-.23-.814l5.888 3.117-.127.22zM12.818 10.501l-6.03-2.8.14-.564c1.204.404 5.734 2.918 5.89 3.364zM14.915 8.825c-.051-.355-.107-.708-.153-1.064-.208-1.65-.4-3.3-.624-4.95-.058-.427.063-.636.564-.639l.475 6.613-.262.04zM57.31 18.735H45.182c.388-1.259 11.664-1.407 12.128 0z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.3 17.847h-8.45c.367-1.233 7.962-1.43 8.45 0zM43.675 18.687h8.42c-.278 1.13-7.678 1.523-8.42 0zM3.817 21.625a3.493 3.493 0 01-.635.347.833.833 0 00-.635.793c-.061.325-.194.633-.388.9-.194-.683-.335-1.362.24-1.9a1.063 1.063 0 011.418-.14zM54.223 8.719c.767-.594.839-1.525.166-2.182.543.192.873.617.83 1.069.026.496-.378.947-.996 1.113zM1.124 24.525a2.462 2.462 0 00.44 2.32c-.47-.106-.833-.444-.94-.873-.171-.53.026-1.102.5-1.447z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 24.888c-.311.494-.088 1.09.517 1.378l-.251.131a3.367 3.367 0 01-.646-.564c-.232-.342-.062-.765.38-.945zM53.76 8.292c.294-.196.446-.458.422-.726-.025-.268-.224-.517-.552-.691.74.106.983.275.999.648.014.354-.107.677-.87.769z"
        fill="#345FB4"
      />
    </Svg>
  );
}

export function ResultIcon() {
  return (
    <Svg width={34} height={40} viewBox="0 0 34 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.903 37.256v-34.2c.029-.049.054-.1.074-.153A2.567 2.567 0 013.691.886h27.165c.272-.007.543 0 .813.021a2.47 2.47 0 012.024 1.394c.112.245.21.497.293.754v26.826c-.13.11-.266.216-.392.331-3.289 2.98-6.58 5.959-9.873 8.936a.912.912 0 01-.555.227c-6.567.011-13.134.014-19.7.007a2.542 2.542 0 01-2.4-1.741c-.052-.127-.11-.255-.163-.385zm21.442-2.1H5.636c-.752 0-.843-.08-.843-.827V5.961c0-.757.082-.84.826-.84H21.8c-.013.062-.011.079-.02.086-.061.06-.125.115-.187.174a7.678 7.678 0 00-2.6 6.76 4.057 4.057 0 005.025 3.781c2.82-.52 4.572-2.414 5.815-4.861.058-.114-.09-.333-.142-.5-.158.077-.378.113-.465.24-.321.47-.558 1-.9 1.453a7.243 7.243 0 01-4.048 2.924 3.447 3.447 0 01-4.59-3.044 7.024 7.024 0 012.418-6.29c.16-.19.297-.398.407-.621l-.1-.1h6.852c.749 0 .829.082.829.835 0 7.485-.003 14.97-.008 22.454v.612h2.708c.008-.164.02-.3.02-.442.004-8.299.007-16.599.009-24.9a1.464 1.464 0 00-1.661-1.653H3.438A1.423 1.423 0 002.07 3.368c-.016.213-.008.428-.008.643v32.695a1.43 1.43 0 001.566 1.532h18.255c.15 0 .3-.016.459-.025l.002-3.057zm1.191 2.371l8.3-7.3h-8.3v7.3zm4.707-20.39H6.752v1h21.49v-1zm0 3.77H6.753v1h21.49v-1zm-21.5 4.778h21.484v-1H6.742v1zm-.008 3.852h21.491v-1H6.736v1zm19-19.693c.194-.095.373-.217.532-.362a.563.563 0 00.094-.469c-.03-.081-.287-.119-.433-.1a.855.855 0 00-.366.211c-.228.178-.392.134-.57-.088-.427-.535-.886-1.046-1.3-1.587-.107-.138-.1-.362-.173-.532a3.686 3.686 0 00-.279-.452 3.241 3.241 0 00-.4.349c-.056.066-.038.192-.059.29-.483 2.244-.972 4.487-1.437 6.734a.6.6 0 00.177.519c.266.141.408-.086.475-.327.2-.715.39-1.432.59-2.146.032-.117.07-.277.156-.329.78-.466 1.57-.913 2.362-1.369.492.547.944 1.043 1.387 1.546.17.193.344.394.6.182.256-.212.095-.435-.07-.623-.418-.477-.834-.944-1.288-1.45l.002.003zM12.261 13.35H7.804a2.839 2.839 0 00-.769.03c-.106.029-.192.297-.287.457.09.168.186.325.286.472.038.052.111.015.168.015h10.113c.071 0 .165.039.209-.028.098-.12.172-.296.21-.501.01-.12-.117-.338-.207-.406a.522.522 0 00-.339-.033l-4.927-.006zm-.024 19.02H7.482a.812.812 0 00-.425.028c-.115.108-.218.25-.307.42.097.182.202.35.313.506.049.06.139.01.21.01h9.939a.39.39 0 00.3-.025c.1-.096.226-.301.224-.456a.706.706 0 00-.229-.448.613.613 0 00-.382-.032l-4.888-.004zM28.46 7.53a2.695 2.695 0 00-.238-.623c-.1-.137-.3-.3-.436-.285-.255.037-.276.273-.21.51.225.81.222.811-.482 1.237-.037.022-.093.036-.106.068-.067.164-.123.333-.182.5.174.032.37.129.519.081.254-.108.497-.243.724-.4.09.3.178.573.253.846.066.24.212.42.45.3a.557.557 0 00.2-.469 8.831 8.831 0 00-.273-1.072c.25-.124.49-.268.717-.433.1-.085.185-.353.132-.416a.549.549 0 00-.45-.158c-.22.076-.429.18-.62.311l.002.003z"
        fill="#345FB4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.852 10.65l.468-2.491 1.3 1.5-1.768.99z"
        fill="#345FB4"
      />
    </Svg>
  );
}
export function GroupChatIcon() {
  return (
    <Svg width={39} height={39} viewBox="0 0 39 39" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.817 9.061a4.489 4.489 0 110-8.978 4.489 4.489 0 010 8.978zM31.656 31.656a4.489 4.489 0 110-8.978 4.489 4.489 0 010 8.978zM23.97 27.212a9.524 9.524 0 01-5.153-4.13 10 10 0 00-8.634-4.893c-5.578 0-10.1 4.522-10.1 10.1 0 5.578 4.522 10.1 10.1 10.1a10 10 0 008.626-4.878 9.627 9.627 0 015.2-4.158c.455-.157.758-.59.75-1.071a1.147 1.147 0 00-.785-1.07h-.004zm-13.787 6.689a1.122 1.122 0 110-2.244 1.122 1.122 0 010 2.244zm1.136-4.685c.004.64-.49 1.174-1.129 1.22a1.048 1.048 0 01-1.13-1.024 2.335 2.335 0 011.5-2.309 1.123 1.123 0 10-1.5-1.058 1.123 1.123 0 01-2.245 0 3.367 3.367 0 114.5 3.171h.004zM12.428 15.795H1.205a1.122 1.122 0 01-1.122-1.123 5.618 5.618 0 015.611-5.611H7.94a5.618 5.618 0 015.611 5.611 1.122 1.122 0 01-1.122 1.123zM37.267 38.39H26.044a1.122 1.122 0 01-1.122-1.123 5.618 5.618 0 015.61-5.61h2.246a5.618 5.618 0 015.61 5.61 1.122 1.122 0 01-1.121 1.123zM28.289.083c-4.741 0-6.82 1.872-8.634 4.891a8.673 8.673 0 01-4.806 3.943 1.481 1.481 0 00-1.1.893 1.142 1.142 0 00.72 1.439 9.622 9.622 0 015.19 4.156 10 10 0 008.626 4.878c5.578 0 10.1-4.522 10.1-10.1 0-5.578-4.522-10.1-10.1-10.1h.004zm4.3 8.513l-4.626 4.625a1.122 1.122 0 01-1.587 0l-2.38-2.38a1.122 1.122 0 011.587-1.587l1.587 1.587 3.831-3.83a1.122 1.122 0 011.587 1.586z"
        fill="#345FB4"
      />
    </Svg>
  );
}

export function EyeIcon({
  openEye = false,
}: {
  openEye?: boolean | undefined;
}): JSX.Element {
  if (openEye) {
    return (
      <Svg width={28} height={28} viewBox="0 -32 576 576">
        <Path
          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
          fill="#a1a1aa"
        />
      </Svg>
    );
  } else {
    return (
      <Svg width={28} height={28} viewBox="0 -64 640 640">
        <Path
          d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
          fill="#a1a1aa"
        />
      </Svg>
    );
  }
}

export function ClassroomIcon() {
  return (
    <Svg width={48} height={48} viewBox="0 0 1024 1024">
      <Path
        d="M197.12 465.92c-61.013 0-110.933-49.92-111.787-110.933 0-61.014 49.494-110.507 110.507-110.507 61.44 0 111.787 49.493 111.787 110.507 0 61.013-49.494 110.933-110.507 110.933zm712.96 374.613H420.693c-3.413 25.174-12.373 48.214-26.026 68.267H910.08c15.787 0 28.587-12.8 28.587-28.587V869.12c0-15.787-12.8-28.587-28.587-28.587z"
        fill="#2855AE"
      />
      <Path
        d="M887.467 115.2H213.333c-28.16 0-51.2 23.04-51.2 51.2v12.8c11.094-2.133 22.187-3.413 33.707-3.413 98.987 0 180.053 80.213 180.053 178.773 0 35.413-10.24 68.693-28.16 96.853 28.16-1.706 44.8-3.84 54.187-5.546l93.013-127.574c20.054-29.013 52.48-46.08 87.894-46.08 20.906 0 40.96 5.974 58.453 17.494l2.133 1.28 9.387 7.68c22.187 17.493 36.693 42.666 39.68 71.253 3.413 27.733-4.267 55.04-20.907 76.8-67.413 92.587-94.72 129.28-106.24 145.067-11.946 27.306-37.973 54.613-70.4 63.146l-1.28.427-71.253 17.067v99.84h277.333c-14.08 0-25.6-11.52-25.6-25.6V729.6c0-14.08 11.52-25.6 25.6-25.6H844.8c14.08 0 25.6 11.52 25.6 25.6v17.067c0 14.08-11.52 25.6-25.6 25.6h42.667c28.16 0 51.2-23.04 51.2-51.2V166.4c0-28.16-23.04-51.2-51.2-51.2z"
        fill="#2855AE"
      />
      <Path
        d="m610.56 352.427-7.253-5.547c-6.4-4.267-13.654-6.4-20.907-6.4-12.8 0-24.747 6.4-32 17.067l-104.107 143.36c-6.826 13.226-79.786 20.906-216.746 22.613h-46.934c-51.2 0-93.013 41.813-93.013 93.013v199.254c0 51.2 41.813 93.013 93.013 93.013h78.507c51.2 0 93.013-41.813 93.013-93.013v-198.4l123.734-29.44c13.226-3.414 25.173-20.907 26.453-29.44v-.427c1.707-1.707 73.813-100.693 112.213-153.173 13.227-15.787 10.24-39.68-5.973-52.48z"
        fill="#2855AE"
      />
    </Svg>
  );
}
