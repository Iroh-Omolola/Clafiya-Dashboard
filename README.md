# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
```

```bash
yarn create next-app --example with-typescript with-typescript-app
```

```bash
pnpm create next-app --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.




 <div className="mt-10 ">
              <div className="border w-[100%] overflow-scroll">
                <TableDevice data={data} className="mb-2" />
              </div>
              <div className="flex px-[12px] w-100vw overflow-x-scroll py-[7px] border-b border-b-blackAlpha-880 border-l border-l-blackAlpha-880 border-r border-r-blackAlpha-880 rounded-bl-lg rounded-br-lg">
                <div className="flex w-1/3 justify-start items-center">
                  <p className="flex border border-blackAlpha-880 justify-center items-center cursor-pointer rounded text-[12px] w-[79px] h-[36px]">
                    Previous
                  </p>
                </div>
                <div className="flex w-2/5 justify-center items-center">
                  <p className="text-[14px]">Page 1 of 10</p>
                </div>
                <div className="flex w-1/3 justify-end items-center">
                  <p className="flex border border-blackAlpha-880 justify-center items-center cursor-pointer rounded text-[12px] w-[79px] h-[36px]">
                    Next
                  </p>
                </div>
              </div>
            </div>






             <div className="mb-7">
              <div className="flex justify-between w-full mb-5">
                <h3>Collaborators</h3>
                <Button
                  icon={<Add fill="white" />}
                  variant="purple"
                  iconPosition="left"
                  onClick={() => setAddCollaborators(true)}
                >
                  Add Collaborator
                </Button>
              </div>
              <TableCollaborator data={data} className="mb-4" />
            </div>