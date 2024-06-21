import React from "react";
import wingo from '../assets/wingo_image.png'
import five_d from '../assets/5d_image.png'
import fortunetiger from '../assets/fortune_tiger_image.png'
import luckyhit from '../assets/lucky_hit_image.jpg'
import dragontigerImage from '../assets/dragon_tiger_image.jpg'
import gorushImage from '../assets/gorush_image.png'
import jackpotfishing from '../assets/jackpot_fishing.png'
import minesImage from '../assets/mines_image.png'
import colorGameImage from '../assets/color_game_image.jpg'
export const GameMenuCard = (props) => {
  return (
    <div>
      <div class="grid grid-cols-3 gap-1">
        <div class="m-1">
            <img
            src={wingo}
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">
        <img
            src={five_d}
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">
        <img
            src={fortunetiger   }
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">
        <img
            src={luckyhit   }
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">
        <img
            src={dragontigerImage   }
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">
        <img
            src={colorGameImage   }
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">
        <img
            src={jackpotfishing   }
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">
        <img
            src={minesImage   }
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
        <div class="m-1">

        <img
            src={gorushImage   }
            
            className="w-[115px] h-[145px] object-fit rounded-2xl"
            ></img>
        </div>
      </div>
    </div>
  );
};

export default GameMenuCard;
