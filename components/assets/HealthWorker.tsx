import * as React from "react";
type Props = {
  fill?: string;
};
export const HealthWorker = (props, { fill }: Props) => (
  <>
    <div className="lg:block hidden">
      <svg
        width={14}
        height={16}
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M13.2683 15.2881C13.2043 14.6753 13.1883 14.0577 13.1275 13.4433C13.0363 12.5233 12.9051 11.6081 12.6331 10.7201C12.4859 10.2449 12.2619 9.83208 11.8155 9.56968C11.3883 9.31848 10.9227 9.16968 10.4555 9.02408C10.2923 8.97288 10.3211 9.08808 10.3307 9.17128C10.3739 9.57288 10.3371 9.96968 10.2539 10.3617C10.2267 10.4881 10.2699 10.5457 10.3787 10.6081C10.8395 10.8657 11.1019 11.2593 11.1307 11.7921C11.1595 12.3409 11.0475 12.8801 11.0139 13.4241C10.9915 13.7937 10.9515 14.1649 10.7963 14.5089C10.6091 14.9249 10.2859 15.0897 9.84426 15.0049C9.67626 14.9729 9.56586 14.8961 9.59306 14.7105C9.62026 14.5281 9.74666 14.4641 9.91466 14.4977C10.1259 14.5393 10.2491 14.4401 10.3355 14.2673C10.3947 14.1473 10.4267 14.0161 10.4395 13.8833C10.5019 13.2705 10.5691 12.6577 10.6187 12.0433C10.6635 11.4881 10.3659 11.0673 9.87306 10.9553C9.36426 10.8401 8.92586 11.0705 8.71626 11.5889C8.54826 12.0033 8.41066 12.4305 8.25066 12.8497C8.15946 13.0865 8.08106 13.3249 8.03306 13.5729C7.97066 13.8945 8.03466 14.0129 8.33226 14.1473C8.47466 14.2113 8.54346 14.3121 8.49386 14.4641C8.44426 14.6177 8.33226 14.6609 8.17866 14.6321C7.74026 14.5489 7.48586 14.2369 7.49386 13.7873C7.49706 13.6033 7.52426 13.4257 7.57546 13.2497C7.76426 12.5969 8.01226 11.9649 8.26506 11.3345C8.49226 10.7681 8.94506 10.4561 9.56106 10.4129C9.68106 10.4033 9.73226 10.3697 9.75466 10.2529C9.82986 9.86408 9.84106 9.47528 9.80586 9.08168C9.78986 8.89608 9.71786 8.79528 9.52426 8.76488C9.36746 8.74088 9.21066 8.68808 9.06346 8.62728C8.91626 8.56808 8.85226 8.58568 8.80106 8.75208C8.62026 9.35688 8.36746 9.93448 8.07466 10.4945C7.93386 10.7649 7.77066 11.0241 7.58986 11.3377C7.51786 10.9409 7.46346 10.6033 7.39306 10.2673C7.36106 10.1169 7.36426 9.98088 7.42986 9.83848C7.46666 9.75688 7.56426 9.66088 7.46666 9.57288C7.31146 9.43208 7.14186 9.30888 6.97706 9.17928C6.97226 9.17448 6.94986 9.18568 6.94026 9.19368C6.78026 9.33128 6.59786 9.44968 6.47306 9.61288C6.39786 9.71048 6.54346 9.83848 6.57546 9.95688C6.58186 9.98408 6.59626 10.0129 6.59306 10.0385C6.52586 10.4513 6.45546 10.8625 6.38026 11.3137C6.32746 11.2513 6.30346 11.2273 6.28746 11.2001C5.86506 10.5185 5.52106 9.80168 5.26026 9.04328C5.20746 8.88808 5.21226 8.64808 5.07946 8.59848C4.95466 8.55208 4.76746 8.67528 4.60746 8.72008C4.52426 8.74408 4.45066 8.76648 4.41866 8.86408C4.35786 9.05288 4.27146 9.23208 4.22666 9.42088C3.93226 10.6497 4.00586 11.8657 4.38506 13.0673C4.44266 13.2497 4.51146 13.3489 4.71946 13.3889C5.12106 13.4689 5.33706 13.9089 5.19946 14.2897C5.05546 14.6913 4.62186 14.8801 4.24426 14.7073C3.86346 14.5345 3.70026 14.0657 3.92106 13.7169C4.00106 13.5905 3.99146 13.4929 3.94826 13.3681C3.54186 12.2017 3.43306 11.0081 3.62026 9.78568C3.66346 9.50408 3.75786 9.23528 3.82186 8.93768C3.26346 9.10088 2.72746 9.23688 2.24426 9.51848C1.88906 9.72488 1.61386 9.99528 1.45866 10.3889C1.27306 10.8609 1.16106 11.3505 1.06666 11.8465C0.849062 12.9985 0.781862 14.1681 0.693862 15.3345C0.669862 15.6529 0.812262 15.8497 1.06506 15.9985H12.8875C13.1883 15.8561 13.3035 15.6289 13.2683 15.2881ZM4.32746 5.44808C4.43626 5.47688 4.48746 5.52968 4.52906 5.62888C4.77386 6.21448 5.07626 6.76488 5.52586 7.22248C5.88106 7.58568 6.29226 7.85768 6.81386 7.91048C7.46986 7.97768 7.98186 7.68488 8.42506 7.24168C8.87626 6.78888 9.18986 6.24488 9.43466 5.65608C9.46826 5.57608 9.47946 5.47528 9.60106 5.46408C10.0379 5.42248 10.3787 4.73128 10.3067 4.31048C10.2859 4.19048 10.2411 4.08008 10.1099 4.07208C9.94666 4.06088 9.97706 3.97448 10.0011 3.87368C10.0875 3.51208 10.1243 3.14248 10.1419 2.82568C10.1531 2.50408 10.1227 2.23688 10.0587 1.98088C9.96106 1.59368 9.76106 1.26088 9.39786 1.07528C9.18346 0.964882 9.01866 0.843282 8.94666 0.604882C8.91946 0.512082 8.82826 0.451282 8.75306 0.388882C8.47466 0.158482 8.14506 0.0576819 7.80266 0.0240819C6.77706 -0.0767181 5.82026 0.142482 4.97386 0.739282C4.38986 1.14888 3.98826 1.68968 3.90666 2.42568C3.85226 2.91048 3.87946 3.39048 3.97066 3.86888C3.98986 3.97128 4.03146 4.07848 3.85066 4.07528C3.76906 4.07368 3.71626 4.14248 3.68906 4.22248C3.53866 4.65128 3.88586 5.33128 4.32746 5.44808Z"
          fill={fill}
        />
      </svg>
    </div>
    <div className="lg:hidden block">
      <svg
        width={22}
        height={21}
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M13.2683 15.2881C13.2043 14.6753 13.1883 14.0577 13.1275 13.4433C13.0363 12.5233 12.9051 11.6081 12.6331 10.7201C12.4859 10.2449 12.2619 9.83208 11.8155 9.56968C11.3883 9.31848 10.9227 9.16968 10.4555 9.02408C10.2923 8.97288 10.3211 9.08808 10.3307 9.17128C10.3739 9.57288 10.3371 9.96968 10.2539 10.3617C10.2267 10.4881 10.2699 10.5457 10.3787 10.6081C10.8395 10.8657 11.1019 11.2593 11.1307 11.7921C11.1595 12.3409 11.0475 12.8801 11.0139 13.4241C10.9915 13.7937 10.9515 14.1649 10.7963 14.5089C10.6091 14.9249 10.2859 15.0897 9.84426 15.0049C9.67626 14.9729 9.56586 14.8961 9.59306 14.7105C9.62026 14.5281 9.74666 14.4641 9.91466 14.4977C10.1259 14.5393 10.2491 14.4401 10.3355 14.2673C10.3947 14.1473 10.4267 14.0161 10.4395 13.8833C10.5019 13.2705 10.5691 12.6577 10.6187 12.0433C10.6635 11.4881 10.3659 11.0673 9.87306 10.9553C9.36426 10.8401 8.92586 11.0705 8.71626 11.5889C8.54826 12.0033 8.41066 12.4305 8.25066 12.8497C8.15946 13.0865 8.08106 13.3249 8.03306 13.5729C7.97066 13.8945 8.03466 14.0129 8.33226 14.1473C8.47466 14.2113 8.54346 14.3121 8.49386 14.4641C8.44426 14.6177 8.33226 14.6609 8.17866 14.6321C7.74026 14.5489 7.48586 14.2369 7.49386 13.7873C7.49706 13.6033 7.52426 13.4257 7.57546 13.2497C7.76426 12.5969 8.01226 11.9649 8.26506 11.3345C8.49226 10.7681 8.94506 10.4561 9.56106 10.4129C9.68106 10.4033 9.73226 10.3697 9.75466 10.2529C9.82986 9.86408 9.84106 9.47528 9.80586 9.08168C9.78986 8.89608 9.71786 8.79528 9.52426 8.76488C9.36746 8.74088 9.21066 8.68808 9.06346 8.62728C8.91626 8.56808 8.85226 8.58568 8.80106 8.75208C8.62026 9.35688 8.36746 9.93448 8.07466 10.4945C7.93386 10.7649 7.77066 11.0241 7.58986 11.3377C7.51786 10.9409 7.46346 10.6033 7.39306 10.2673C7.36106 10.1169 7.36426 9.98088 7.42986 9.83848C7.46666 9.75688 7.56426 9.66088 7.46666 9.57288C7.31146 9.43208 7.14186 9.30888 6.97706 9.17928C6.97226 9.17448 6.94986 9.18568 6.94026 9.19368C6.78026 9.33128 6.59786 9.44968 6.47306 9.61288C6.39786 9.71048 6.54346 9.83848 6.57546 9.95688C6.58186 9.98408 6.59626 10.0129 6.59306 10.0385C6.52586 10.4513 6.45546 10.8625 6.38026 11.3137C6.32746 11.2513 6.30346 11.2273 6.28746 11.2001C5.86506 10.5185 5.52106 9.80168 5.26026 9.04328C5.20746 8.88808 5.21226 8.64808 5.07946 8.59848C4.95466 8.55208 4.76746 8.67528 4.60746 8.72008C4.52426 8.74408 4.45066 8.76648 4.41866 8.86408C4.35786 9.05288 4.27146 9.23208 4.22666 9.42088C3.93226 10.6497 4.00586 11.8657 4.38506 13.0673C4.44266 13.2497 4.51146 13.3489 4.71946 13.3889C5.12106 13.4689 5.33706 13.9089 5.19946 14.2897C5.05546 14.6913 4.62186 14.8801 4.24426 14.7073C3.86346 14.5345 3.70026 14.0657 3.92106 13.7169C4.00106 13.5905 3.99146 13.4929 3.94826 13.3681C3.54186 12.2017 3.43306 11.0081 3.62026 9.78568C3.66346 9.50408 3.75786 9.23528 3.82186 8.93768C3.26346 9.10088 2.72746 9.23688 2.24426 9.51848C1.88906 9.72488 1.61386 9.99528 1.45866 10.3889C1.27306 10.8609 1.16106 11.3505 1.06666 11.8465C0.849062 12.9985 0.781862 14.1681 0.693862 15.3345C0.669862 15.6529 0.812262 15.8497 1.06506 15.9985H12.8875C13.1883 15.8561 13.3035 15.6289 13.2683 15.2881ZM4.32746 5.44808C4.43626 5.47688 4.48746 5.52968 4.52906 5.62888C4.77386 6.21448 5.07626 6.76488 5.52586 7.22248C5.88106 7.58568 6.29226 7.85768 6.81386 7.91048C7.46986 7.97768 7.98186 7.68488 8.42506 7.24168C8.87626 6.78888 9.18986 6.24488 9.43466 5.65608C9.46826 5.57608 9.47946 5.47528 9.60106 5.46408C10.0379 5.42248 10.3787 4.73128 10.3067 4.31048C10.2859 4.19048 10.2411 4.08008 10.1099 4.07208C9.94666 4.06088 9.97706 3.97448 10.0011 3.87368C10.0875 3.51208 10.1243 3.14248 10.1419 2.82568C10.1531 2.50408 10.1227 2.23688 10.0587 1.98088C9.96106 1.59368 9.76106 1.26088 9.39786 1.07528C9.18346 0.964882 9.01866 0.843282 8.94666 0.604882C8.91946 0.512082 8.82826 0.451282 8.75306 0.388882C8.47466 0.158482 8.14506 0.0576819 7.80266 0.0240819C6.77706 -0.0767181 5.82026 0.142482 4.97386 0.739282C4.38986 1.14888 3.98826 1.68968 3.90666 2.42568C3.85226 2.91048 3.87946 3.39048 3.97066 3.86888C3.98986 3.97128 4.03146 4.07848 3.85066 4.07528C3.76906 4.07368 3.71626 4.14248 3.68906 4.22248C3.53866 4.65128 3.88586 5.33128 4.32746 5.44808Z"
          fill={fill}
        />
      </svg>
    </div>
  </>
);
