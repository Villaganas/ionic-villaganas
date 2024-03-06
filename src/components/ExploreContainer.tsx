import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton } from '@ionic/react';
function Example() {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/423583714_1444891803090617_4793189191939464381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGl5A39vM92hA5ErEMAjCv2ZXDTm0Na27JlcNObQ1rbsp5Ul0wAFj9_JbdxCDOsPtvuoatpXT6aHADqwV134QR8&_nc_ohc=ujHlTrt7dZ0AX_Ts2nq&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&oh=00_AfAtGzN6tqIg2NT4IDhAHzwO5vGHfCwa84FcuhEd_5f3qQ&oe=65ED490C" />
      <IonCardHeader>
        <IonCardTitle>Bimbo E. Villaganas</IonCardTitle>
        <IonCardSubtitle>Helping one person might not change the whole world, but it could change the world for one person.</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ex ipsum iusto placeat sapiente dignissimos perspiciatis laudantium repellat impedit natus rerum, itaque iure cumque ea voluptatum totam exercitationem aliquid. Amet molestiae eligendi vero voluptates doloremque ullam, assumenda consequatur natus ad quasi et aut ipsa, cupiditate nemo. Enim facere esse deserunt porro dolor dolorum voluptate recusandae obcaecati consequatur quaerat voluptatibus, cum ut officia laborum dicta! Perferendis nisi nam illum suscipit repellat rerum deleniti tempore eos, consectetur consequatur quis, aspernatur debitis vero cumque obcaecati. Cum voluptatum perferendis dolorum et earum natus ea, alias cumque eius beatae, laboriosam incidunt velit optio. Laudantium vero sapiente exercitationem reiciendis earum alias corrupti placeat mollitia voluptatem porro. Deleniti dolore, in eveniet dicta quaerat maxime laudantium iusto labore sint aut expedita mollitia optio aliquam commodi tempora iste illo aliquid perferendis, earum tenetur dolores accusamus! Consectetur modi officiis ullam. Voluptatibus reprehenderit omnis praesentium pariatur laudantium nisi natus aliquam a.</IonCardContent>
      
    <>
    <a href="https://web.facebook.com/bimbo.villaganas.71">
    <IonButton>View my Facebook Profile</IonButton>
    </a>
    <IonButton id="present-alert">View my projects</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Sorry, no project to be shown yet."
        subHeader="The project is still in progress."
        message="Please stay tuned for updates on the project."
        buttons={['Ok']}
      ></IonAlert>
  </>
    </IonCard>
    
  );
}
export default Example;