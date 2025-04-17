import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

function UpdateMembership() {
  const [membership, setMembership] = useState({
    name: "",
    email: "",
    membershipType: "",
    startDate: "",
    endDate: "",
    status: "active",
  });

  const [isError, setIsError] = useState(false);
  const { membershipId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembershipDetails = async () => {
      try {
        const response = await fetch(`/api/memberships/${membershipId}`);
        const data = await response.json();
        setMembership({
          name: data.name,
          email: data.email,
          membershipType: data.membershipType,
          startDate: data.startDate,
          endDate: data.endDate,
          status: data.status,
        });
      } catch (error) {
        console.error("Error fetching membership details:", error);
      }
    };

    fetchMembershipDetails();
  }, [membershipId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMembership((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (value) => {
    setMembership((prev) => ({
      ...prev,
      status: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!membership.name || !membership.email || !membership.membershipType) {
      setIsError(true);
      return;
    }

    setIsError(false);
    console.log("Updated Membership:", membership);
    navigate("/MembershipList");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <Card>
        <CardContent className="py-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Update Membership</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={membership.name} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={membership.email} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="membershipType">Membership Type</Label>
              <Input
                id="membershipType"
                name="membershipType"
                value={membership.membershipType}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                value={membership.startDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                value={membership.endDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Status</Label>
              <RadioGroup defaultValue={membership.status} onValueChange={handleStatusChange} className="flex gap-6 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="active" id="r1" checked={membership.status === "active"} />
                  <Label htmlFor="r1">Active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inactive" id="r2" checked={membership.status === "inactive"} />
                  <Label htmlFor="r2">Inactive</Label>
                </div>
              </RadioGroup>
            </div>

            {isError && (
              <p className="text-red-600 text-sm">Please fill in all required fields before submitting.</p>
            )}

            <Button type="submit" className="w-full">
              Update Membership
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default UpdateMembership;
