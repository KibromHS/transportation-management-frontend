export type TruckStatus = "available" | "on_route" | "maintenance" | "offline";

export interface Truck {
  id: string;
  type: string;
  status: TruckStatus;
  driverId?: string;
  driver?: {
    id: string;
    name: string;
    avatar?: string;
  };
  location?: string;
  lastUpdated: string;
  fuelLevel?: number;
  mileage?: number;
  nextMaintenance?: string;
}

/**
 * Get all trucks
 */
export const getAllTrucks = async () => {
  try {
    // get driver from trucks order by id
    const { data, error } = {data: [], error: null};

    if (error) throw error;

    // Transform the data to match the frontend model
    const trucks: Truck[] = data.map((truck) => ({
      id: truck.id,
      type: truck.type,
      status: truck.status as TruckStatus,
      driverId: truck.driver_id,
      driver: truck.driver
        ? {
            id: truck.driver.id,
            name: truck.driver.full_name,
            avatar: truck.driver.avatar_url,
          }
        : undefined,
      location: truck.location,
      lastUpdated: truck.last_updated,
      fuelLevel: truck.fuel_level,
      mileage: truck.mileage,
      nextMaintenance: truck.next_maintenance,
    }));

    return { trucks };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get truck by ID
 */
export const getTruckById = async (id: string) => {
  try {
    const { data, error } = {data: <Truck>{}, error: null};

    if (error) throw error;

    const truck: Truck = {
      id: data.id,
      type: data.type,
      status: data.status as TruckStatus,
      driverId: data.driverId,
      // driver: data.driver
      //   ? {
      //       id: data.driver.id,
      //       name: data.driver.full_name,
      //       avatar: data.driver.avatar_url,
      //     }
      //   : undefined,
      location: data.location,
      lastUpdated: data.lastUpdated,
      fuelLevel: data.fuelLevel,
      mileage: data.mileage,
      nextMaintenance: data.nextMaintenance,
    };

    return { truck };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Create a new truck
 */
export const createTruck = async (truckData: Omit<Truck, "lastUpdated">) => {
  try {
    const { data, error } = {
      data: {
        id: truckData.id,
        type: truckData.type,
        status: truckData.status,
        driver_id: truckData.driverId,
        location: truckData.location,
        fuel_level: truckData.fuelLevel,
        mileage: truckData.mileage,
        next_maintenance: truckData.nextMaintenance,
      },
      error: null,
    }

    if (error) throw error;

    return {
      truck: {
        id: data.id,
        type: data.type,
        status: data.status as TruckStatus,
        driverId: data.driver_id,
        location: data.location,
        // lastUpdated: data.lastUpdated,
        fuelLevel: data.fuel_level,
        mileage: data.mileage,
        nextMaintenance: data.next_maintenance,
      },
    };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Update a truck
 */
export const updateTruck = async (
  id: string,
  updates: Partial<Omit<Truck, "id" | "lastUpdated">>,
) => {
  try {
    const updateData: any = {};
    if (updates.type !== undefined) updateData.type = updates.type;
    if (updates.status !== undefined) updateData.status = updates.status;
    if (updates.driverId !== undefined) updateData.driver_id = updates.driverId;
    if (updates.location !== undefined) updateData.location = updates.location;
    if (updates.fuelLevel !== undefined)
      updateData.fuel_level = updates.fuelLevel;
    if (updates.mileage !== undefined) updateData.mileage = updates.mileage;
    if (updates.nextMaintenance !== undefined)
      updateData.next_maintenance = updates.nextMaintenance;

    const { data, error } = {data: updateData, error: null};

    if (error) throw error;

    return {
      truck: {
        id: data.id,
        type: data.type,
        status: data.status as TruckStatus,
        driverId: data.driver_id,
        location: data.location,
        lastUpdated: data.last_updated,
        fuelLevel: data.fuel_level,
        mileage: data.mileage,
        nextMaintenance: data.next_maintenance,
      },
    };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Delete a truck
 */
export const deleteTruck = async (id: string) => {
  try {
    const { error } = {error: null};
    if (error) throw error;
    return { success: true };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};

/**
 * Get trucks by status
 */
export const getTrucksByStatus = async (status: TruckStatus) => {
  try {
    const { data, error } = {data: [], error: null};

    if (error) throw error;

    const trucks: Truck[] = data.map((truck) => ({
      id: truck.id,
      type: truck.type,
      status: truck.status as TruckStatus,
      driverId: truck.driver_id,
      driver: truck.driver
        ? {
            id: truck.driver.id,
            name: truck.driver.full_name,
            avatar: truck.driver.avatar_url,
          }
        : undefined,
      location: truck.location,
      lastUpdated: truck.last_updated,
      fuelLevel: truck.fuel_level,
      mileage: truck.mileage,
      nextMaintenance: truck.next_maintenance,
    }));

    return { trucks };
  } catch (error) {
    // return handleSupabaseError(error);
    console.error(error);
  }
};
