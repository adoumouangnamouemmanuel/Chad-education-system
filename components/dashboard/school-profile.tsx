"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Edit, MapPin, Wifi, Zap, Building2, BookOpen } from "lucide-react"

export function SchoolProfile() {
  // Sample school data
  const school = {
    name: "Lycée National de N'Djamena",
    type: "Public",
    registrationNumber: "SCH-2023-1234",
    establishedYear: 1975,
    location: {
      region: "N'Djamena",
      department: "N'Djamena",
      prefecture: "N'Djamena",
      subPrefecture: "1st Arrondissement",
      canton: "Centre",
      cityOrVillage: "N'Djamena",
    },
    infrastructure: {
      classrooms: {
        total: 28,
        usable: 25,
      },
      electricity: true,
      waterSource: "Municipal Water Supply",
      toilets: "12 (6 for boys, 6 for girls)",
      library: true,
      laboratory: true,
      sportsField: true,
      canteen: true,
      boarding: false,
      internetAccess: true,
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{school.name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {school.location.cityOrVillage}, {school.location.region}
            </span>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-4">Basic Information</h4>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <dt className="font-medium">School Type</dt>
            <dd>{school.type}</dd>

            <dt className="font-medium">Registration Number</dt>
            <dd>{school.registrationNumber}</dd>

            <dt className="font-medium">Established Year</dt>
            <dd>{school.establishedYear}</dd>

            <dt className="font-medium">Region</dt>
            <dd>{school.location.region}</dd>

            <dt className="font-medium">Department</dt>
            <dd>{school.location.department}</dd>

            <dt className="font-medium">Prefecture</dt>
            <dd>{school.location.prefecture}</dd>

            <dt className="font-medium">Sub-Prefecture</dt>
            <dd>{school.location.subPrefecture}</dd>

            <dt className="font-medium">Canton</dt>
            <dd>{school.location.canton}</dd>
          </dl>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-4">Infrastructure</h4>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Classrooms</div>
                  <div className="text-xl font-bold">
                    {school.infrastructure.classrooms.usable} / {school.infrastructure.classrooms.total}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${school.infrastructure.electricity ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                >
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Electricity</div>
                  <div className="text-xl font-bold">{school.infrastructure.electricity ? "Yes" : "No"}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${school.infrastructure.internetAccess ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                >
                  <Wifi className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Internet</div>
                  <div className="text-xl font-bold">{school.infrastructure.internetAccess ? "Yes" : "No"}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${school.infrastructure.library ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                >
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Library</div>
                  <div className="text-xl font-bold">{school.infrastructure.library ? "Yes" : "No"}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 text-sm">
            <div className="font-medium">Water Source</div>
            <div className="text-muted-foreground">{school.infrastructure.waterSource}</div>

            <div className="font-medium mt-2">Toilets</div>
            <div className="text-muted-foreground">{school.infrastructure.toilets}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
