interface postClockin {
  position: GeolocationPosition;
}
export default async function postClockin({ position }: postClockin) {
  const { latitude, longitude } = position.coords;
}
