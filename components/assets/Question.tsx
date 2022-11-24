import * as React from "react";
type Props = {
  fill?: string;
};
export const Question = (props, { fill = "#DBDDE0" }: Props) => (
  <>
    <div className="hidden lg:block">
      <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7.0032 0C3.1344 0 0 3.1344 0 6.9968C0 10.8656 3.1344 14 7.0032 14C10.8656 14 14 10.8656 14 6.9968C14 3.1344 10.8656 0 7.0032 0ZM7.8048 11.8576C7.4592 11.9152 7.1296 11.944 6.8112 11.944C6.4768 11.944 6.136 11.9152 5.8016 11.8576C5.7504 11.5232 5.7216 11.1936 5.7216 10.864C5.7216 10.5344 5.7504 10.2 5.8016 9.8544C6.136 9.8032 6.472 9.7744 6.7952 9.7744C7.1248 9.7744 7.4592 9.8032 7.8048 9.8544C7.8624 10.2016 7.8864 10.536 7.8864 10.8528C7.8864 11.1888 7.8624 11.5232 7.8048 11.8576ZM9.6176 5.9456C9.456 6.2576 9.2544 6.5168 9.0224 6.7312C8.792 6.9456 8.5552 7.1184 8.3072 7.2448C8.064 7.3776 7.8624 7.4752 7.712 7.5392V8.7808C7.3952 8.832 7.088 8.8608 6.7936 8.8608C6.4992 8.8608 6.2112 8.832 5.9392 8.7808V6.4368C6.1472 6.4016 6.3664 6.3504 6.592 6.2816C6.8176 6.2128 7.0304 6.12 7.2208 5.9984C7.4112 5.8832 7.568 5.7328 7.688 5.56C7.8096 5.3808 7.872 5.1616 7.872 4.896C7.872 4.5088 7.728 4.2096 7.4512 4.0064C7.168 3.7984 6.7936 3.7008 6.3312 3.7008C6.1408 3.7008 5.9728 3.7072 5.8224 3.7184C5.672 3.7296 5.5344 3.7536 5.4064 3.7872C5.28 3.816 5.1472 3.856 5.0144 3.8976C4.888 3.9376 4.7488 3.984 4.5984 4.0416C4.472 3.8048 4.368 3.5568 4.2864 3.3024C4.2064 3.048 4.1536 2.7824 4.136 2.512C4.3728 2.432 4.592 2.3616 4.7936 2.304C4.9904 2.24 5.1856 2.1936 5.376 2.16C5.5664 2.1248 5.7568 2.096 5.9472 2.0848C6.1376 2.0736 6.3456 2.0624 6.5584 2.0624C7.6496 2.0624 8.4752 2.3104 9.0288 2.8064C9.5824 3.3024 9.8608 3.9776 9.8608 4.8448C9.8656 5.2704 9.7792 5.6352 9.6176 5.9456Z"
          fill={fill}
        />
      </svg>
    </div>
    <div className="block lg:hidden">
      <svg
        width={20}
        height={20}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7.0032 0C3.1344 0 0 3.1344 0 6.9968C0 10.8656 3.1344 14 7.0032 14C10.8656 14 14 10.8656 14 6.9968C14 3.1344 10.8656 0 7.0032 0ZM7.8048 11.8576C7.4592 11.9152 7.1296 11.944 6.8112 11.944C6.4768 11.944 6.136 11.9152 5.8016 11.8576C5.7504 11.5232 5.7216 11.1936 5.7216 10.864C5.7216 10.5344 5.7504 10.2 5.8016 9.8544C6.136 9.8032 6.472 9.7744 6.7952 9.7744C7.1248 9.7744 7.4592 9.8032 7.8048 9.8544C7.8624 10.2016 7.8864 10.536 7.8864 10.8528C7.8864 11.1888 7.8624 11.5232 7.8048 11.8576ZM9.6176 5.9456C9.456 6.2576 9.2544 6.5168 9.0224 6.7312C8.792 6.9456 8.5552 7.1184 8.3072 7.2448C8.064 7.3776 7.8624 7.4752 7.712 7.5392V8.7808C7.3952 8.832 7.088 8.8608 6.7936 8.8608C6.4992 8.8608 6.2112 8.832 5.9392 8.7808V6.4368C6.1472 6.4016 6.3664 6.3504 6.592 6.2816C6.8176 6.2128 7.0304 6.12 7.2208 5.9984C7.4112 5.8832 7.568 5.7328 7.688 5.56C7.8096 5.3808 7.872 5.1616 7.872 4.896C7.872 4.5088 7.728 4.2096 7.4512 4.0064C7.168 3.7984 6.7936 3.7008 6.3312 3.7008C6.1408 3.7008 5.9728 3.7072 5.8224 3.7184C5.672 3.7296 5.5344 3.7536 5.4064 3.7872C5.28 3.816 5.1472 3.856 5.0144 3.8976C4.888 3.9376 4.7488 3.984 4.5984 4.0416C4.472 3.8048 4.368 3.5568 4.2864 3.3024C4.2064 3.048 4.1536 2.7824 4.136 2.512C4.3728 2.432 4.592 2.3616 4.7936 2.304C4.9904 2.24 5.1856 2.1936 5.376 2.16C5.5664 2.1248 5.7568 2.096 5.9472 2.0848C6.1376 2.0736 6.3456 2.0624 6.5584 2.0624C7.6496 2.0624 8.4752 2.3104 9.0288 2.8064C9.5824 3.3024 9.8608 3.9776 9.8608 4.8448C9.8656 5.2704 9.7792 5.6352 9.6176 5.9456Z"
          fill={fill}
        />
      </svg>
    </div>
  </>
);
