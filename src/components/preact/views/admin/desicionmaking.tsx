"use strict";

// Function to Render Object Table With Results.
function TableResults({ paramsDesicion }) {
  if (paramsDesicion) {
    return (
      <>
        <table class="table-auto">
          <thead>
            <tr class="text-sky-700">
              <th class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                Categorías
              </th>
              <th class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                Peso (%)
              </th>
              <th class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                Rangos
              </th>
              <th class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                SubCategorías
              </th>
              <th class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                Peso (%)
              </th>
              <th class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                Rangos
              </th>
            </tr>
          </thead>
          <tbody>
            {paramsDesicion.Categories.map((element: any) => (
              <tr>
                <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                  <div class="flex flex-grow">
                    {element.Icon.map((icon: any) => (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="text-sky-700 w-5 h-5"
                        >
                          <path
                            fill-rule={icon.path.fillrule}
                            d={icon.path.d}
                            clip-rule={icon.path.cliprule}
                          ></path>
                        </svg>
                      </>
                    ))}
                    &nbsp; {element.NameCategorie}
                  </div>
                </td>
                <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                  {element.Weight}
                </td>
                <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                  {element.Score}
                </td>
                <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                  {element.SubCategories.map((subCat: any) => (
                    <>
                      {subCat.NameSubCategorie} <br />
                    </>
                  ))}
                </td>
                <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                  {element.SubCategories.map((subCat: any) => (
                    <>
                      {subCat.Weight} <br />
                    </>
                  ))}
                </td>
                <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                  {element.SubCategories.map((subCat: any) => (
                    <>
                      {subCat.Score} <br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
            <tr class="font-bold">
              <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                Total:
              </td>
              <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                100%
              </td>
              <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700"></td>
              <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700"></td>
              <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700">
                100%
              </td>
              <td class="p-3 border border-l-0 border-r-0 border-t-0 border-sky-700"></td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

// Function to Render Object Recommendations.
function Recommendations({ paramsDesicion }) {
  if (paramsDesicion) {
    return (
      <>
        <table class="table-auto mt-4">
          <tbody>
            <tr>
              {paramsDesicion.Categories.map((element: any) => (
                <td class="border border-t-0 border-b-0 lg:pl-6 lg:pr-4 sm:pl-2 sm:pr-2 border-sky-700">
                  <div class="">
                    <div class="flex flex-grow">
                      {element.Icon.map((icon: any) => (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="text-sky-700 w-5 h-5 mr-2"
                          >
                            <path
                              fill-rule={icon.path.fillrule}
                              d={icon.path.d}
                              clip-rule={icon.path.cliprule}
                            ></path>
                          </svg>
                        </>
                      ))}
                      <span class="font-bold text-sky-700 mr-2">
                        {element.NameCategorie}:
                      </span>
                    </div>
                    <br />
                    <div class="">
                      {element.SubCategories.map((subCat: any) => (
                        <>
                          <span class="font-bold">
                            * {subCat.NameSubCategorie}: {" "}
                          </span> <> ({subCat.Score}) - </> {" "}
                          <>
                            {subCat.Recomendations.map((rec: any) => {
                              if (subCat.Score == rec.Level) {
                                return <> {rec.Recomendation}</>;
                              }
                            })}
                          </>
                          <br /> <br />
                        </>
                      ))}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

// Function to Get Table with Results.
export function GetTableResults({ paramsDesicion }) {
  return TableResults({ paramsDesicion });
}

// Function to Get Recommendations.
export function GetRecommendations({ paramsDesicion }) {
  return Recommendations({ paramsDesicion });
}
