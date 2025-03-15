
import TabsBodyContent from "./TabsBodyContent";
function TabsBody({ hidden, children, content }) {
  return hidden ? (
    <div className="h-[75%] flex lg:justify-evenly items-start gap-4 lg:gap-14 p-4 lg:px-8 sm:flex-col md:flex-row flex-col justify-center">
      <TabsBodyContent title = {content.title} description = {content.description}>
      </TabsBodyContent>
      <div className="lg:w-[50%] max-w-[35rem] mx-auto w-full max-h-[20rem] lg:overflow-y-scroll lg:overflow-x-hidden p-4 mt-4 lg:mt-0 overflow-x-scroll">{children}</div>
    </div>
  ) : (
    ""
  );
}

export default TabsBody;
