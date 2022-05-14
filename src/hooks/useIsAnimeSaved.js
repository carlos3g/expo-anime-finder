import { getData } from '~/utils';

/**
 * @param {object} animeData
 * @returns {[boolean, number, object[]]}
 */
const useIsAnimeSaved = async (animeData) => {
  const savedAnimes = await getData('@saveAnimes');
  const animeIndex = savedAnimes.findIndex((a) => a.id === animeData.id);

  return [animeIndex != -1, animeIndex, savedAnimes];
};

export default useIsAnimeSaved;
